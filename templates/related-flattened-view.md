# Related Concepts — Flattened View

This query flattens the `related` frontmatter field across every document in
the vault — `content/` and `publications/` alike — into one clean table:
source file, document type, related concept, relationship. The `templates/`
folder is explicitly excluded, since template files carry empty placeholder
stubs that would otherwise show up as blank rows.

```dataviewjs
const pages = dv.pages('"" and !"templates"');
const rows = [];

for (const page of pages) {
    const related = page.related;
    if (!related) continue;

    for (const entry of related) {
        rows.push([
            page.file.link,
            page.type ?? "",
            entry.concept,
            entry.relationship
        ]);
    }
}

dv.table(["Document", "Type", "Related Concept", "Relationship"], rows);
```

---

## Sources — Flattened View

Same approach for the `sources` field: source file, document type, URL, type, date.

```dataviewjs
const pages = dv.pages('"" and !"templates"');
const rows = [];

for (const page of pages) {
    const sources = page.sources;
    if (!sources) continue;

    for (const entry of sources) {
        rows.push([
            page.file.link,
            page.type ?? "",
            entry.url,
            entry.type,
            entry.date
        ]);
    }
}

dv.table(["Document", "Type", "URL", "Source Type", "Date"], rows);
```

---

## Scoping to a specific folder

If you ever want to narrow either query back down — say, just frameworks,
or just publications — replace `dv.pages('"" and !"templates"')` with a
folder-scoped query, e.g. `dv.pages('"content/frameworks"')` or
`dv.pages('"publications"')`. An empty string `'""'` queries the entire
vault; a folder path string queries only that folder and its subfolders;
the `and !"templates"` clause excludes a folder from the result set and can
be combined with any other scope the same way.
