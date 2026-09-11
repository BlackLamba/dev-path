# DEV PATH — Backend + AI Engineering

Персональный интерактивный **30-дневный learning dashboard** для развития в направлении
**Python Backend + AI/ML Engineering**. Полностью статическое приложение: без backend, БД и
авторизации. Весь прогресс хранится в `localStorage` браузера.

## Возможности

- **Dashboard** — «что делать сегодня»: текущий день, статистика, следующие дни
- **Roadmap** — 30 дней в виде вертикального timeline по 4 неделям
- **Страница дня** — что изучить, материалы (офиц. доки), практика с критериями готовности,
  Definition of Done чек-лист
- **Practice** — все практические задания с фильтрами (All / Todo / In progress / Completed)
- **Materials** — каталог всех источников с фильтрами по направлению и типу
- **Progress** — статистика (дни, задачи, часы, серии), прогресс по направлениям,
  система из 7 достижений, сброс прогресса
- Автосохранение: чекбоксы, завершённые дни, ссылки на код, последний открытый день
- Тосты при завершении дня и разблокировке достижений
- Responsive: desktop / laptop / tablet / mobile (sidebar → hamburger)

## 30 дней

| Неделя | Фокус |
| --- | --- |
| Week 01 | Python + HTTP + FastAPI (HTTP, REST, статусы, FastAPI, Pydantic, DI, mini-project) |
| Week 02 | SQL + PostgreSQL + SQLAlchemy (SQL, JOIN/CTE/окна, индексы/EXPLAIN, транзакции, архитектура PG, ORM, Alembic) |
| Week 03 | Architecture + Docker + Redis (проектирование, Docker/Dockerfile/Compose, Redis, кэш/TTL, Celery) |
| Week 04 | AI Engineering (PyTorch, Dataset/DataLoader, train/val/inference, checkpoints, ML inference API, интеграция, background ML-задачи, Dockerized AI service, **финальный проект**) |

Финальный проект — **AI Experiment Platform**:
`React/Swagger → FastAPI → PostgreSQL → Redis → Background Worker → PyTorch Model`.

## Запуск

```bash
npm install
npm run dev        # dev-сервер (Vite)
npm run build      # production-сборка (TypeScript-проверка + vite build)
npm run preview    # локальный просмотр собранной версии
```

Сборка лежит в `dist/` и готова к деплою на GitHub Pages / Vercel / любой статический
хостинг (используется HashRouter — никаких правил сервера не требуется).

## Стек

React 18 · TypeScript · Vite · lucide-react · чистый CSS (дизайн-токены в `src/styles/index.css`)

## Структура

```text
src/
├── components/   # Sidebar, Layout, MaterialCard, TaskCard, Checklist, Toasts, …
├── data/         # course.ts (все 30 дней), achievements.ts
├── hooks/        # useProgress (контекст + localStorage)
├── pages/        # Dashboard, Roadmap, Today, DayPage, Practice, Materials, ProgressPage
├── styles/       # index.css
├── types.ts      # доменные типы
└── utils/        # progress (статистика/серии), format
```

## Данные

Вся программа описана в `src/data/course.ts` (30 дней: описание, материалы с реальными
проверенными ссылками, задачи с требованиями и критериями, чек-листы). Чтобы изменить
контент — правьте этот файл; приложение подхватит всё автоматически.

## Сброс прогресса

Progress → «Reset all progress» (двойное подтверждение). Ключ в localStorage: `devpath-progress-v1`.
