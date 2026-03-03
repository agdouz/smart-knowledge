@echo off
mkdir src\app\dashboard
move src\pages\Dashboard.tsx src\app\dashboard\page.tsx

mkdir src\app\professors
move src\pages\Professors.tsx src\app\professors\page.tsx

mkdir src\app\professors\[id]
move src\pages\ProfessorProfile.tsx src\app\professors\[id]\page.tsx

mkdir src\app\insights
move src\pages\AIInsights.tsx src\app\insights\page.tsx

mkdir src\app\simulation
move src\pages\SimulationLab.tsx src\app\simulation\page.tsx

mkdir src\app\schedule
move src\pages\Schedule.tsx src\app\schedule\page.tsx

move src\pages\Landing.tsx src\app\page.tsx
move src\pages\NotFound.tsx src\app\not-found.tsx

rmdir /s /q src\pages

del src\main.tsx
del src\App.tsx
del src\App.css
del vite.config.ts
del vite-env.d.ts
del src\vite-env.d.ts
del index.html
