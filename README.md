# MachinekeeprWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploy to GitHub Pages (`www.machinekeepr.com`)

This repo is configured to auto-deploy to GitHub Pages using GitHub Actions via `.github/workflows/deploy-pages.yml`.

### 1) GitHub repository setup

1. Push this project to your GitHub repo.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Make sure your default deployment branch is `master` (the workflow runs on pushes to `master`).

### 2) Custom domain in GitHub Pages

1. In **Settings → Pages**, set **Custom domain** to `www.machinekeepr.com`.
2. Keep **Enforce HTTPS** enabled after DNS starts resolving correctly.

`public/CNAME` is already included and also enforced during CI build output.

### 3) GoDaddy DNS records

In your GoDaddy DNS manager for `machinekeepr.com`:

- Add a `CNAME` record:
	- **Host**: `www`
	- **Points to**: `jzon-03.github.io`
	- **TTL**: default (e.g. 1 hour)

Optional root-domain redirect recommendation:

- Forward `machinekeepr.com` to `https://www.machinekeepr.com` using GoDaddy Forwarding,
	so all traffic uses your `www` host.

### 4) Validate deployment

1. Push to `master`.
2. Watch **Actions → Deploy to GitHub Pages** complete successfully.
3. Open `https://www.machinekeepr.com`.

DNS propagation may take from a few minutes up to 24–48 hours depending on resolver caches.
