# Developer Notes

## Environment variables
`.env` files _must_ be suffixed with either `.development` or `.production` in order for Sanity to use them. The environment suffix is determined by the following:
* `process.env.SANITY_ACTIVE_ENV` takes precedence
* `process.env.NODE_ENV` is fallback
* if neither of the above are defined, then `development` is using for `sanity start` and `production` is used for `sanity build` and `sanity deploy`.

Also, in `sanity.json`, the following properties _must_ be defined, even when using env vars:
```
"api": {
  "projectId": "thiscannotbeemptyevenwhenusingenvvarsotherwisesanityisnothappy",
  "dataset": "mustbe20charsorless"
},
```
When using env vars, the `projectId` and `dataset` id values can be any arbitrary value as they are overridden by env vars. However, the `dataset` value must be 20 characters or less to pass Sanity validation.
```
SANITY_STUDIO_API_PROJECT_ID=
SANITY_STUDIO_API_DATASET=
```
