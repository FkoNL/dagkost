# Dagkost

Een eenvoudige receptenwebsite: snel, gezond en vooral lekker.

## Lokaal starten

```sh
pnpm install
pnpm dev
```

## Recepten toevoegen

Maak in `src/content/recipes/` een nieuw Markdown-bestand. De vaste velden bovenaan zijn de basis voor een schaalbaar kookboek; ingrediënten en bereidingsstappen staan als gestructureerde lijsten in de frontmatter. De pagina's, zoekfunctie en kookmodus nemen het recept automatisch mee.

## GitHub Pages

1. Pas in `astro.config.mjs` `site` aan naar `https://<gebruikersnaam>.github.io` en `base` naar `/<repositorynaam>`.
2. Commit en push naar de `main`-branch.
3. Kies in de repository onder **Settings → Pages** voor **GitHub Actions** als bron.

De workflow in `.github/workflows/deploy.yml` bouwt en publiceert daarna automatisch de site.
