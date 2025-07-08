#!/bin/bash

# Messaggio di commit automatico con data e ora
COMMIT_MSG="Aggiornamento del sito - $(date '+%Y-%m-%d %H:%M:%S')"

# Controlla se ci sono modifiche
if git diff-index --quiet HEAD --; then
  echo "✅ Nessuna modifica da aggiornare."
else
  echo "🔄 Modifiche trovate, procedo con il commit..."
  git add .
  git commit -m "$COMMIT_MSG"
  git push origin main
  echo "✅ Modifiche caricate con commit: $COMMIT_MSG"
fi