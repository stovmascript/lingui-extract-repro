## Repro

```bash
git clone https://github.com/stovmascript/lingui-extract-repro.git
cd lingui-extract-repro/
npm i
npm run extract -- --convert-from lingui
```

## Output

```
> lingui extract "--convert-from" "lingui"

Catalog statistics:
┌──────────┬─────────────┬─────────┐
│ Language │ Total count │ Missing │
├──────────┼─────────────┼─────────┤
│ cs       │      4      │    4    │
│ en       │      4      │    4    │
└──────────┴─────────────┴─────────┘

(use "npm run extract -- --convert-from add-locale <locale>" to add more locales)
(use "npm run extract -- --convert-from extract" to update catalogs with new messages)
(use "npm run extract -- --convert-from compile" to compile catalogs for production)
```
