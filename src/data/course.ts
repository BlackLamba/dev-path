import type { Lesson, Week } from "../types";

export const WEEKS: Week[] = [
  {
    number: 1,
    code: "WEEK 01",
    title: "Python + HTTP + FastAPI",
    focus: "Фундамент API: протокол, дизайн, первый сервис",
    days: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    number: 2,
    code: "WEEK 02",
    title: "SQL + PostgreSQL + SQLAlchemy",
    focus: "Данные: от SQL до ORM и миграций",
    days: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    number: 3,
    code: "WEEK 03",
    title: "Architecture + Docker + Redis",
    focus: "Собираем систему: слои, контейнеры, кэш, очереди",
    days: [15, 16, 17, 18, 19, 20, 21],
  },
  {
    number: 4,
    code: "WEEK 04",
    title: "AI Engineering",
    focus: "От модели до сервиса: PyTorch, inference, интеграция",
    days: [22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

const DOCS_PY_TYPING = "https://docs.python.org/3/library/typing.html";
const DOCS_PY_DATACLASSES = "https://docs.python.org/3/library/dataclasses.html";
const MDN_HTTP = "https://developer.mozilla.org/en-US/docs/Web/HTTP";
const MDN_METHODS = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods";
const MDN_STATUS = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status";
const MDN_HEADERS = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers";
const MDN_COOKIES = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies";
const RFC9110 = "https://datatracker.ietf.org/doc/html/rfc9110";
const FOWLER_REST = "https://www.martinfowler.com/articles/richardsonMaturityModel.html";
const RFC6574 = "https://datatracker.ietf.org/doc/html/rfc6574";
const RFC9457 = "https://datatracker.ietf.org/doc/html/rfc9457";
const FA_TUTORIAL = "https://fastapi.tiangolo.com/tutorial/";
const FA_FIRST_STEPS = "https://fastapi.tiangolo.com/tutorial/first-steps/";
const FA_BODY = "https://fastapi.tiangolo.com/tutorial/body/";
const FA_HANDLING_ERRORS = "https://fastapi.tiangolo.com/tutorial/handling-errors/";
const FA_DEPS = "https://fastapi.tiangolo.com/tutorial/dependencies/";
const FA_DEPS_YIELD = "https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/";
const FA_BIGGER = "https://fastapi.tiangolo.com/tutorial/bigger-applications/";
const FA_EVENTS = "https://fastapi.tiangolo.com/advanced/events/";
const FA_ASYNC = "https://fastapi.tiangolo.com/async/";
const FA_BG_TASKS = "https://fastapi.tiangolo.com/tutorial/background-tasks/";
const FA_TESTING = "https://fastapi.tiangolo.com/tutorial/testing/";
const FA_HOWTO = "https://fastapi.tiangolo.com/how-to/";
const FOWLER_DI = "https://martinfowler.com/articles/injection.html";
const PYDANTIC = "https://docs.pydantic.dev/";
const PG_TUTORIAL = "https://www.postgresql.org/docs/current/tutorial.html";
const PG_SELECT = "https://www.postgresql.org/docs/current/sql-select.html";
const PG_TABLE = "https://www.postgresql.org/docs/current/tutorial-table.html";
const PG_JOIN = "https://www.postgresql.org/docs/current/tutorial-join.html";
const PG_WINDOW = "https://www.postgresql.org/docs/current/tutorial-window.html";
const PG_SQL = "https://www.postgresql.org/docs/current/sql.html";
const PG_INDEX_INTRO = "https://www.postgresql.org/docs/current/indexes-intro.html";
const PG_EXPLAIN = "https://www.postgresql.org/docs/current/sql-explain.html";
const UTL = "https://use-the-index-luke.com/";
const PG_TX_ISO = "https://www.postgresql.org/docs/current/transaction-iso.html";
const PG_TX = "https://www.postgresql.org/docs/current/tutorial-transactions.html";
const PG_SAVEPOINT = "https://www.postgresql.org/docs/current/sql-savepoint.html";
const PG_ARCH = "https://www.postgresql.org/docs/current/tutorial-arch.html";
const PG_START = "https://www.postgresql.org/docs/current/tutorial-start.html";
const PG_WAL = "https://www.postgresql.org/docs/current/wal.html";
const SA_TUTORIAL = "https://docs.sqlalchemy.org/en/20/orm/tutorial.html";
const SA_QUERY = "https://docs.sqlalchemy.org/en/20/orm/queryguide.html";
const SA_REL = "https://docs.sqlalchemy.org/en/20/orm/relationships.html";
const AL_TUTORIAL = "https://alembic.sqlalchemy.org/en/latest/tutorial.html";
const AL_AUTOGEN = "https://alembic.sqlalchemy.org/en/latest/autogenerate.html";
const C4 = "https://c4model.com/";
const SOLID = "https://www.baeldung.com/solid-principles";
const DO_GETSTARTED = "https://docs.docker.com/get-started/";
const DO_BUILD = "https://docs.docker.com/build/";
const DOCKERFILE_REF = "https://docs.docker.com/engine/reference/builder/";
const UV = "https://docs.astral.sh/uv/";
const DO_COMPOSE = "https://docs.docker.com/compose/";
const DO_VOLUMES = "https://docs.docker.com/storage/volumes/";
const DO_NETWORK = "https://docs.docker.com/network/";
const DO_COMPOSE_FILE = "https://docs.docker.com/reference/compose-file";
const DO_COMPOSE_MODEL = "https://docs.docker.com/compose/intro/compose-application-model/";
const REDIS_TYPES = "https://redis.io/docs/latest/develop/data-types/";
const REDIS_CMDS = "https://redis.io/docs/latest/commands/";
const REDIS_USE = "https://redis.io/docs/latest/develop/using-commands/";
const REDIS_PERSIST = "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/";
const CEL_FIRST = "https://docs.celeryproject.org/en/stable/getting-started/first-steps-with-celery.html";
const CEL_BROKERS = "https://docs.celeryproject.org/en/stable/getting-started/backends-and-brokers/index.html";
const CEL_WORKERS = "https://docs.celeryproject.org/en/stable/userguide/workers.html";
const CEL_TASKS = "https://docs.celeryproject.org/en/stable/userguide/tasks.html";
const CEL_NEXT = "https://docs.celeryproject.org/en/stable/getting-started/next-steps.html";
const PT_INTRO = "https://pytorch.org/tutorials/beginner/basics/intro.html";
const PT_BUILDMODEL = "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html";
const PT_AUTOGRAD = "https://pytorch.org/docs/stable/notes/autograd.html";
const PT_DATA = "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html";
const PT_QUICKSTART = "https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html";
const PT_OPTIM = "https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html";
const PT_CUDA = "https://pytorch.org/docs/stable/notes/cuda.html";
const PT_SAVELOAD = "https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html";
const PT_JIT = "https://pytorch.org/docs/stable/jit.html";
const MLBOOK = "https://www.mlpowered.com/book/";
const PROGIT = "https://git-scm.com/book/en/v2";

export const LESSONS: Lesson[] = [
  // ─────────────────────────── WEEK 1 ───────────────────────────
  {
    id: 1,
    week: 1,
    title: "HTTP fundamentals",
    category: "Backend",
    difficulty: "Beginner",
    duration: 90,
    learn: "HTTP — язык, на котором говорит твой API. Сегодня восстанавливаем и уточняем основы: анатомия request и response, семантика методов GET/POST/PUT/PATCH/DELETE, чтение заголовков и понимание того, что происходит «под капотом» при каждом запросе.",
    why: "Без чёткого понимания HTTP любой backend остаётся магией. Все последующие дни — FastAPI, REST, auth, кэш — стоят на этом фундаменте.",
    coreConcept: "запрос → ответ, методы и их семантика",
    materials: [
      { id: "m1", title: "MDN — HTTP Overview", source: "Mozilla (MDN)", type: "docs", category: "Backend", url: MDN_HTTP, minutes: 30, note: "Анатомия request/response, методы, статусы" },
      { id: "m2", title: "MDN — HTTP Methods", source: "Mozilla (MDN)", type: "docs", category: "Backend", url: MDN_METHODS, minutes: 20, note: "Семантика методов, идемпотентность" },
      { id: "m3", title: "RFC 9110 — HTTP Semantics", source: "IETF", type: "spec", category: "Backend", url: RFC9110, minutes: 30, note: "Опционально: первоисточник протокола" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Пощупай HTTP руками",
        description: "Разберём реальные запросы через curl и соберём собственную карту протокола — то, что потом будет под спиной весь месяц.",
        requirements: [
          "Отправь 5 запросов к httpbin.org (GET, POST, PUT, DELETE, HEAD) с флагом -v",
          "Зафиксируй в docs/http-notes.md: строку запроса, ключевые заголовки, тело ответа, статусы",
          "Опиши словами: чем PUT отличается от PATCH, что такое идемпотентность и почему GET ей обладает",
          "Отправь запрос с кастомным заголовком X-Request-Id: test-1 и найди его в ответе",
        ],
        doneWhen: [
          "Можешь нарисовать анатомию запроса и ответа по памяти",
          "Понимаешь семантику всех 5 методов",
        ],
      },
    ],
    checklist: [
      "Прочитал(а) основной материал (MDN HTTP Overview)",
      "Понял(а) суть: запрос → ответ, методы и их семантика",
      "Выполнил(а) практическое задание с curl",
      "Могу объяснить HTTP fundamentals своими словами",
    ],
  },
  {
    id: 2,
    week: 1,
    title: "REST API",
    category: "Backend",
    difficulty: "Beginner",
    duration: 100,
    learn: "REST — не про технологии, а про договорённости: как называть ресурсы, когда какой метод, как пагинировать и в каком формате отдавать ошибки. Сегодня проектируем API нашего финального проекта — Experiment API.",
    why: "Спека, написанная сегодня, станет контрактом всего месяца: к ней мы подойдём с FastAPI, БД, Redis и моделью.",
    coreConcept: "ресурсы, stateless, идемпотентность",
    materials: [
      { id: "m1", title: "Richardson Maturity Model", source: "martinfowler.com", type: "article", category: "Backend", url: FOWLER_REST, minutes: 30, note: "4 уровня зрелости REST — где мы и куда идём" },
      { id: "m2", title: "RFC 6574 — Paging Controls", source: "IETF", type: "spec", category: "Backend", url: RFC6574, minutes: 15, note: "offset/limit-пагинация" },
      { id: "m3", title: "RFC 9457 — problem+json", source: "IETF", type: "spec", category: "Backend", url: RFC9457, minutes: 15, note: "Стандартный формат ошибок" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Спроектируй Experiment API",
        description: "Сначала контракт, потом код: опиши API будущего проекта так, чтобы FastAPI-дд был чисто механикой.",
        requirements: [
          "Опиши в docs/api-spec.md ресурсы: /experiments, /experiments/{id}, /runs, /runs/{id}, /health",
          "Для каждого эндпоинта: метод, body, response, статусы (200/201/404/409/422)",
          "Спроектируй пагинацию и фильтрацию GET /experiments (limit/offset, фильтр по status)",
          "Определи формат ошибок (problem+json)",
        ],
        doneWhen: ["Спека покрывает весь CRUD + запуск эксперимента", "У каждого эндпоинта описаны статусы"],
      },
    ],
    checklist: [
      "Прочитал(а) Richardson Maturity Model",
      "Понял(а) суть: ресурсы, stateless, идемпотентность",
      "Выполнил(а) проектирование API-спеки",
      "Могу объяснить REST-принципы своими словами",
    ],
  },
  {
    id: 3,
    week: 1,
    title: "HTTP status codes, headers, cookies",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 90,
    learn: "Статус-коды — это язык API для клиента: 200, 409 и 422 должны быть не случайными, а осмысленными. Плюс — заголовки, которые реально используются (Content-Type, Authorization, Cache-Control), и cookies: что это и когда нужны.",
    why: "Клиент (React, Swagger, curl) читает API только через статусы и заголовки. Неверные статусы — это баг, даже если «всё работает».",
    coreConcept: "когда какой статус, ключевые заголовки",
    materials: [
      { id: "m1", title: "MDN — HTTP Status Codes", source: "Mozilla (MDN)", type: "docs", category: "Backend", url: MDN_STATUS, minutes: 25, note: "2xx/4xx/5xx: когда какой" },
      { id: "m2", title: "MDN — HTTP Headers", source: "Mozilla (MDN)", type: "docs", category: "Backend", url: MDN_HEADERS, minutes: 15, note: "Ключевые заголовки и их смысл" },
      { id: "m3", title: "MDN — Cookies", source: "Mozilla (MDN)", type: "docs", category: "Backend", url: MDN_COOKIES, minutes: 15, note: "Cookies, HttpOnly/Secure" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Карта статусов + живая проверка",
        description: "Соберём свою таблицу статус-кодов и проверим каждый кодом.",
        requirements: [
          "Составь таблицу в docs/status-codes.md: статус → когда использовать (минимум 10 статусов)",
          "Создай тестовые FastAPI-эндпоинты, возвращающие 200, 201, 204, 404, 409, 422, 500",
          "Проверь каждый через curl -i: статус + тело + заголовки",
          "Реализуй пару эндпоинтов с cookies: POST /cookie-set, GET /cookie-check",
        ],
        doneWhen: ["Таблица статусов лежит в репо", "Все 7 статусов возвращаются ожидаемо"],
      },
    ],
    checklist: [
      "Прочитал(а) MDN про статус-коды",
      "Понял(а) суть: когда какой статус, ключевые заголовки",
      "Выполнил(а) карту статусов + проверку curl",
      "Могу объяснить выбор статуса для любой ситуации",
    ],
  },
  {
    id: 4,
    week: 1,
    title: "FastAPI fundamentals",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Первое реальное приложение на FastAPI: структура проекта, route-функции, path- и query-параметры, JSON-ответы и авто-Swagger. Заложим правильную структуру сразу — src-layout и пакеты, а не один main.py.",
    why: "FastAPI — сердце финального продукта. Сегодня рождается репозиторий experiment-api, который будет жить весь месяц.",
    coreConcept: "route, параметры, авто-Swagger",
    materials: [
      { id: "m1", title: "FastAPI — Official Tutorial", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_TUTORIAL, minutes: 45, note: "Разделы First Steps → Path Parameters" },
      { id: "m2", title: "FastAPI — First Steps", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_FIRST_STEPS, minutes: 20, note: "Первый app и uvicorn" },
      { id: "m3", title: "Python docs — typing", source: "docs.python.org", type: "docs", category: "Python", url: DOCS_PY_TYPING, minutes: 15, note: "Аннотации в сигнатурах = схема API" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Каркас experiment-api",
        description: "Создаём проект, который будет разрастаться до финальной платформы.",
        requirements: [
          "Создай репозиторий experiment-api (uv или venv + pip; ruff; pytest)",
          "Структура: app/main.py, app/api/ (роутеры), app/schemas/, app/core/",
          "Реализуй GET /health и GET /experiments (пустой список, in-memory)",
          "Проверь Swagger UI на localhost:8000/docs; сделай первый коммит в GitHub",
        ],
        doneWhen: ["Приложение стартует одной командой", "Swagger показывает оба эндпоинта"],
      },
    ],
    checklist: [
      "Прочитал(а) FastAPI Tutorial (первые разделы)",
      "Понял(а) суть: route, параметры, авто-Swagger",
      "Выполнил(а) каркас experiment-api",
      "Могу объяснить, как FastAPI строит OpenAPI из аннотаций",
    ],
  },
  {
    id: 5,
    week: 1,
    title: "Pydantic и validation",
    category: "Python",
    difficulty: "Intermediate",
    duration: 100,
    learn: "Pydantic — мост между «случайным JSON из интернета» и типизированным Python. Научимся описывать модели данных так, чтобы валидация, сериализация и документация строились автоматически.",
    why: "Каждый вход и выход твоего API — это Pydantic-модель. Хорошие модели = 80% надёжности API.",
    coreConcept: "модели = контракт валидации",
    materials: [
      { id: "m1", title: "Pydantic — Official Documentation", source: "docs.pydantic.dev", type: "docs", category: "Python", url: PYDANTIC, minutes: 40, note: "Models, validation, nested objects" },
      { id: "m2", title: "FastAPI — Request Body Models", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_BODY, minutes: 25, note: "Как body превращается в модель" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Модели Experiment API",
        description: "Описываем доменные модели так, чтобы API защищал себя сам.",
        requirements: [
          "ExperimentCreate: name, method (enum: yolo/diffusion/gan), epochs (int, 1..1000), latent_dim (int, 8..1024)",
          "ExperimentRead: + id, status, created_at; ExperimentUpdate: все поля опциональные",
          "Кастомный валидатор: name не короче 3 символов, без пробелов по краям",
          "Проверь 422-ответы в Swagger: неверный тип, выход за диапазон, отсутствие поля",
        ],
        doneWhen: ["CRUD-схемы покрывают create/update/read", "422-кейсы проверены и понятны"],
      },
    ],
    checklist: [
      "Прочитал(а) Pydantic docs",
      "Понял(а) суть: модели = контракт валидации",
      "Выполнил(а) модели с валидаторами",
      "Могу объяснить, как Pydantic строит ошибки 422",
    ],
  },
  {
    id: 6,
    week: 1,
    title: "Dependency Injection, middleware, exceptions",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Три вещи, которые превращают «скрипт с роутами» в приложение: зависимые услуги через Depends, middleware для сквозных забот (logging, request_id) и иерархия исключений вместо хаотичных raise.",
    why: "Это тот самый Dependency Injection, о котором спрашивают на собеседованиях, плюс чистые ошибки — то, что отличает middle-код от junior-кода.",
    coreConcept: "зависимости, middleware, иерархия ошибок",
    materials: [
      { id: "m1", title: "FastAPI — Dependencies", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_DEPS, minutes: 35, note: "Depends, yield-зависимости, sub-dependencies" },
      { id: "m2", title: "FastAPI — Handling Errors", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_HANDLING_ERRORS, minutes: 20, note: "HTTPException, exception handlers" },
      { id: "m3", title: "Martin Fowler — Dependency Injection", source: "martinfowler.com", type: "article", category: "Backend", url: FOWLER_DI, minutes: 15, note: "Зачем DI (кратко и по делу)" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Инфраструктура приложения",
        description: "Задаём «каркасные» механики, которые будут использоваться во всех последующих днях.",
        requirements: [
          "Иерархия исключений в app/core/exceptions.py: AppError → NotFoundError, ConflictError, ModelError",
          "Exception handlers: собственные ошибки → корректные JSON-ответы (404/409/500)",
          "Middleware: присваивает request_id (UUID) каждому запросу и логирует метод/путь/время",
          "Depends: get_current_user-заглушка, которую используют минимум 2 эндпоинта",
        ],
        doneWhen: ["Ошибки возвращаются в едином формате", "У каждого запроса в логах есть request_id"],
      },
    ],
    checklist: [
      "Прочитал(а) FastAPI Dependencies",
      "Понял(а) суть: зависимости, middleware, иерархия ошибок",
      "Выполнил(а) инфраструктуру приложения",
      "Могу объяснить, зачем нужен DI в FastAPI",
    ],
  },
  {
    id: 7,
    week: 1,
    title: "Mini-project: Experiment API",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 150,
    learn: "Собираем всё вместе: CRUD experiments на in-memory хранилище, правильные статусы, схемы, middleware, документация. Вечером у тебя будет работающий сервис, который можно показать.",
    why: "Мини-проект закрывает неделю: если он работает — неделя усвоена, если нет — видно, где дыры.",
    coreConcept: "от спеки до работающего сервиса",
    materials: [
      { id: "m1", title: "FastAPI — Bigger Applications", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_BIGGER, minutes: 25, note: "Роутеры, структура, APIRouter" },
      { id: "m2", title: "FastAPI — Lifespan Events", source: "fastapi.tiangolo.com", type: "docs", category: "Backend", url: FA_EVENTS, minutes: 10, note: "Startup/shutdown: инициализация состояния" },
      { id: "m3", title: "Python docs — dataclasses", source: "docs.python.org", type: "docs", category: "Python", url: DOCS_PY_DATACLASSES, minutes: 15, note: "Альтернативные модели данных (для понимания)" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Мини-проект: Experiment API v0.1",
        description: "Финал недели 1: полный CRUD сервиса по спеке из дня 2.",
        requirements: [
          "POST /experiments → 201 (создаёт experiment со статусом created)",
          "GET /experiments → 200 (пагинация limit/offset + фильтр по status)",
          "GET /experiments/{id} → 200 / 404",
          "PATCH /experiments/{id} → 200 / 404 / 409 (если уже запущен)",
          "Lifespan: при старте — лог + seed из 3 тестовых experiments",
          "Репозиторий в GitHub с README (как запустить)",
        ],
        doneWhen: ["Все операции работают со статусами по спеке", "README + GitHub-коммит есть"],
      },
    ],
    checklist: [
      "Прочитал(а) Bigger Applications",
      "Понял(а) суть: от спеки до работающего сервиса",
      "Выполнил(а) mini-project",
      "Могу объяснить архитектуру Experiment API v0.1",
    ],
  },

  // ─────────────────────────── WEEK 2 ───────────────────────────
  {
    id: 8,
    week: 2,
    title: "SQL fundamentals",
    category: "PostgreSQL",
    difficulty: "Beginner",
    duration: 120,
    learn: "Разогрев SQL до уверенного уровня: SELECT, условия, сортировка, агрегаты. Сразу на реальном PostgreSQL в Docker — никакой абстракции.",
    why: "Все данные AI-платформы живут в PostgreSQL. Уверенный SQL — то, без чего backend+AI просто не собирается.",
    coreConcept: "таблицы, условия, агрегаты",
    materials: [
      { id: "m1", title: "PostgreSQL — Tutorial (Part I)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_TUTORIAL, minutes: 45, note: "Разделы 2–3: таблицы, запросы, агрегаты" },
      { id: "m2", title: "PostgreSQL — SELECT (reference)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_SELECT, minutes: 20, note: "Полный синтаксис SELECT" },
      { id: "m3", title: "PostgreSQL — Creating a New Table", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_TABLE, minutes: 15, note: "Типы колонок, CREATE TABLE" },
    ],
    tasks: [
      {
        id: "t1",
        title: "SQL-разминка на PostgreSQL",
        description: "Поднимаем настоящую БД и пишем первые 10 запросов.",
        requirements: [
          "Подними postgres:16 в Docker (docker run, переменные окружения, порт 5432)",
          "Создай таблицы experiments и runs + вставь 20+ строк тестовых данных",
          "10 запросов в sql/practice.sql: WHERE, ORDER BY, GROUP BY + HAVING, COUNT/AVG/MAX",
          "Каждый запрос — с комментарием: что именно он считает",
        ],
        doneWhen: ["10 запросов работают и прокомментированы", "PG стартует одной командой Docker"],
      },
    ],
    checklist: [
      "Прочитал(а) PostgreSQL Tutorial (Part I)",
      "Понял(а) суть: таблицы, условия, агрегаты",
      "Выполнил(а) SQL-разминку в psql",
      "Могу написать GROUP BY-запрос по памяти",
    ],
  },
  {
    id: 9,
    week: 2,
    title: "JOIN, GROUP BY, subqueries",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Сложные запросы: JOIN (INNER/LEFT/CROSS — когда какой), подзапросы и CTE (WITH), плюс оконные функции (ROW_NUMBER) для классической задачи «top N на каждую группу» — и для собеседований, и для реальной аналитики экспериментов.",
    why: "Аналитика по экспериментам («лучшие 5 runs по метрике для каждого experiment») — это как раз JOIN + CTE + окна.",
    coreConcept: "JOIN, CTE, оконные функции",
    materials: [
      { id: "m1", title: "PostgreSQL — Joins Between Tables", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_JOIN, minutes: 30, note: "INNER/LEFT/CROSS, ON, self-join" },
      { id: "m2", title: "PostgreSQL — Window Functions", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_WINDOW, minutes: 25, note: "ROW_NUMBER, PARTITION BY, LAG" },
      { id: "m3", title: "PostgreSQL — Part II: The SQL Language", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_SQL, minutes: 20, note: "Подзапросы и CTE в общем контексте SQL" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Запросы-головоломки",
        description: "Три типа запросов, которые закрывают 80% реальной аналитики.",
        requirements: [
          "12 запросов в sql/joins.sql: INNER/LEFT JOIN experiments×runs",
          "CTE: средняя метрика по каждому method (yolo/diffusion/gan)",
          "Оконная функция: top-3 runs по metric для каждого experiment (ROW_NUMBER + PARTITION BY)",
          "Объясни в комментарии, почему в одном случае LEFT JOIN, а не INNER",
        ],
        doneWhen: ["Все три типа запросов работают", "«Top N на группу» решена через ROW_NUMBER"],
      },
    ],
    checklist: [
      "Прочитал(а) разделы про JOIN и окна",
      "Понял(а) суть: JOIN, CTE, оконные функции",
      "Выполнил(а) 15+ запросов в sql/joins.sql",
      "Могу объяснить, когда LEFT JOIN, а не INNER",
    ],
  },
  {
    id: 10,
    week: 2,
    title: "Indexes и EXPLAIN",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Зачем нужны индексы, как устроен B-tree и главное — как доказать, что индекс помог: EXPLAIN (ANALYZE, BUFFERS) до и после. Плюс: почему индекс иногда не работает (избирательность, функции, сортировка).",
    why: "Классический interview-вопрос по производительности: создать индекс, выполнить EXPLAIN ANALYZE до и после и сравнить. Сегодня делаем именно это.",
    coreConcept: "B-tree, Seq Scan vs Index Scan, EXPLAIN",
    materials: [
      { id: "m1", title: "PostgreSQL — Index Introduction", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_INDEX_INTRO, minutes: 30, note: "B-tree, когда индекс полезен" },
      { id: "m2", title: "PostgreSQL — EXPLAIN (reference)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_EXPLAIN, minutes: 20, note: "EXPLAIN (ANALYZE, BUFFERS)" },
      { id: "m3", title: "use-the-index-luke", source: "use-the-index-luke.com", type: "article", category: "PostgreSQL", url: UTL, minutes: 20, note: "Почему индекс иногда не помогает — на практике" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Эксперимент: индекс до/после",
        description: "Докажем цифры: Seq Scan vs Index Scan на 100 000 строк.",
        requirements: [
          "Создай таблицу runs на 100 000 строк (generate_series + случайные значения)",
          "Запрос WHERE experiment_id = X ORDER BY metric: EXPLAIN ANALYZE без индекса",
          "Создай составной индекс (experiment_id, metric) и повтори EXPLAIN ANALYZE",
          "Задокументируй в docs/index-experiment.md: тип скана и время до/после, выводы",
          "Добавь индексы в схему experiments (по status, created_at)",
        ],
        doneWhen: ["Два EXPLAIN-плана задокументированы, разница видна", "Индексы добавлены в схему"],
      },
    ],
    checklist: [
      "Прочитал(а) Index Introduction",
      "Понял(а) суть: B-tree, Seq Scan vs Index Scan",
      "Выполнил(а) эксперимент с EXPLAIN до/после",
      "Могу объяснить, когда индекс не срабатывает",
    ],
  },
  {
    id: 11,
    week: 2,
    title: "Transactions и isolation",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Транзакции — гарантия, что «создать experiment и его runs» не развалится на полпути. isolation levels: что видит каждая сессия и почему READ COMMITTED отличается от REPEATABLE READ — покажем на живых сессиях psql.",
    why: "Научные данные нельзя терять на полпути. Понимание транзакций и изоляции — база для корректных обновлений статусов runs.",
    coreConcept: "ACID, BEGIN/COMMIT/ROLLBACK, изоляция",
    materials: [
      { id: "m1", title: "PostgreSQL — Transaction Isolation", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_TX_ISO, minutes: 35, note: "Уровни изоляции, аномалии" },
      { id: "m2", title: "PostgreSQL — Transactions (tutorial)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_TX, minutes: 15, note: "BEGIN/COMMIT/ROLLBACK на практике" },
      { id: "m3", title: "PostgreSQL — SAVEPOINT (reference)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_SAVEPOINT, minutes: 10, note: "Откат к точке внутри транзакции" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Покажи изоляцию руками",
        description: "Две сессии psql — и видно, что такое «невидимые» изменения.",
        requirements: [
          "Две сессии psql: A начинает транзакцию и меняет строку без коммита; B читает — что видит?",
          "REPEATABLE READ: продемонстрируй non-repeatable read (два SELECT до и после коммита A)",
          "SAVEPOINT: откат к точке внутри транзакции",
          "Скрипт: обновление статуса run + сохранение метрики в одной транзакции",
        ],
        doneWhen: ["Можешь объяснить аномалии изоляции своими словами", "Скрипт с транзакцией работает"],
      },
    ],
    checklist: [
      "Прочитал(а) Transaction Isolation",
      "Понял(а) суть: ACID и уровни изоляции",
      "Выполнил(а) эксперимент с двумя сессиями",
      "Могу объяснить, чем READ COMMITTED отличается от REPEATABLE READ",
    ],
  },
  {
    id: 12,
    week: 2,
    title: "PostgreSQL architecture",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 100,
    learn: "Что происходит внутри: postmaster, backend-процессы, WAL, shared buffers, checkpointer. Почему PostgreSQL — «процесс на соединение» и как это влияет на пул соединений в приложении.",
    why: "Понимание архитектуры объясняет 90% вопросов про производительность PG: пулы, WAL, блокировки, бэкапы.",
    coreConcept: "архитектура процессов, WAL, пулы",
    materials: [
      { id: "m1", title: "PostgreSQL — Architectural Fundamentals", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_ARCH, minutes: 35, note: "Процессы, WAL, shared buffers" },
      { id: "m2", title: "PostgreSQL — Getting Started", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_START, minutes: 15, note: "Запуск и первый доступ к серверу" },
      { id: "m3", title: "PostgreSQL — Write-Ahead Log (WAL)", source: "postgresql.org", type: "docs", category: "PostgreSQL", url: PG_WAL, minutes: 20, note: "Как WAL обеспечивает durability и recovery" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Карта архитектуры",
        description: "Нарисуем и объясним, как устроен сервер изнутри.",
        requirements: [
          "Нарисуй (mermaid) схему: postmaster → backends, WAL, shared buffers, background processes",
          "Объясни в docs/pg-architecture.md: что такое WAL и зачем он нужен (crash recovery)",
          "Посмотри наживую: SELECT * FROM pg_stat_activity — увидишь backend-процессы",
          "Ответь письменно: почему в FastAPI нужен connection pool, а не новое соединение на запрос?",
        ],
        doneWhen: ["Схема + объяснение WAL задокументированы", "Видел backend-процессы в pg_stat_activity"],
      },
    ],
    checklist: [
      "Прочитал(а) Architectural Fundamentals",
      "Понял(а) суть: процессы, WAL, пулы",
      "Выполнил(а) карту архитектуры в доках",
      "Могу объяснить роль WAL",
    ],
  },
  {
    id: 13,
    week: 2,
    title: "SQLAlchemy ORM",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 150,
    learn: "Переносим схему из SQL в ORM в современном 2.0-стиле: DeclarativeBase, Mapped, relationships, Session как Unit of Work. И сразу — как не уронить производительность на N+1.",
    why: "SQLAlchemy — стандарт де-факто в Python backend. Писать 2.0-стиль и ловить N+1 — must для уровня Middle.",
    coreConcept: "модели, Session, N+1",
    materials: [
      { id: "m1", title: "SQLAlchemy — ORM Tutorial (2.0)", source: "docs.sqlalchemy.org", type: "tutorial", category: "PostgreSQL", url: SA_TUTORIAL, minutes: 50, note: "DeclarativeBase, Mapped, Session" },
      { id: "m2", title: "SQLAlchemy — Querying the ORM", source: "docs.sqlalchemy.org", type: "docs", category: "PostgreSQL", url: SA_QUERY, minutes: 25, note: "select(), N+1, eager loading" },
      { id: "m3", title: "SQLAlchemy — Relationships", source: "docs.sqlalchemy.org", type: "docs", category: "PostgreSQL", url: SA_REL, minutes: 15, note: "back_populates, lazy/eager" },
    ],
    tasks: [
      {
        id: "t1",
        title: "ORM-слой experiment-api",
        description: "Схема дня 8–9 становится кодом.",
        requirements: [
          "Модели: Experiment, Run (relationship 1:N, back_populates)",
          "Репозиторий: create / get / list (limit, offset, фильтр status) / update",
          "Подключи реальную PostgreSQL (URL из .env)",
          "Скрипт: создай 50 experiments × 5 runs и прочитай их обратно (проверка связи)",
        ],
        doneWhen: ["CRUD через ORM работает на реальной БД", "Скрипт на 250 строк выполняется за секунды"],
      },
    ],
    checklist: [
      "Прочитал(а) ORM Tutorial 2.0",
      "Понял(а) суть: модели, Session, N+1",
      "Выполнил(а) ORM-слой с репозиторием",
      "Могу объяснить N+1 и как его ловить",
    ],
  },
  {
    id: 14,
    week: 2,
    title: "Alembic + database migrations",
    category: "PostgreSQL",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Зачем нужны миграции: схема БД — это код, а код — под версионированием. Alembic превращает изменения моделей SQLAlchemy в управляемые SQL-миграции с upgrade/downgrade.",
    why: "Без миграций «обновить схему в проде» — это лотерея. Alembic — стандарт, и он обязателен в финальном проекте.",
    coreConcept: "миграции, autogenerate, head",
    materials: [
      { id: "m1", title: "Alembic — Tutorial", source: "alembic.sqlalchemy.org", type: "tutorial", category: "PostgreSQL", url: AL_TUTORIAL, minutes: 40, note: "init, env.py, upgrade/downgrade" },
      { id: "m2", title: "Alembic — Autogenerate", source: "alembic.sqlalchemy.org", type: "docs", category: "PostgreSQL", url: AL_AUTOGEN, minutes: 15, note: "Как работает autogenerate и его ограничения" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Миграции для experiment-api",
        description: "Схема под версионированием.",
        requirements: [
          "alembic init + env.py: target_metadata от наших моделей",
          "Первая миграция: autogenerate → upgrade head → проверь таблицы в psql",
          "Добавь поле runs.metric (float, nullable) → новая миграция",
          "downgrade -1 → upgrade head: проверь обратимость",
        ],
        doneWhen: ["upgrade head поднимает схему с нуля", "Автосгенерация + ручная правка миграции"],
      },
    ],
    checklist: [
      "Прочитал(а) Alembic Tutorial",
      "Понял(а) суть: миграции, autogenerate, head",
      "Выполнил(а) первую и вторую миграции",
      "Могу объяснить, зачем нужны миграции",
    ],
  },

  // ─────────────────────────── WEEK 3 ───────────────────────────
  {
    id: 15,
    week: 3,
    title: "Проектирование backend-приложений",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 100,
    learn: "День архитектуры: слои (routers → services → repositories), зачем они нужны и что тестировать на каждом уровне; hexagonal-мышление; и как нарисовать систему так, чтобы её понял другой человек (C4).",
    why: "С этого дня ты перестаёшь «писать код» и начинаешь «проектировать систему» — ключевой переход от junior к middle.",
    coreConcept: "слои, Ports & Adapters, C4",
    materials: [
      { id: "m1", title: "C4 model", source: "c4model.com", type: "article", category: "Backend", url: C4, minutes: 25, note: "Как рисовать диаграммы архитектуры" },
      { id: "m2", title: "Baeldung — SOLID Principles", source: "baeldung.com", type: "article", category: "Backend", url: SOLID, minutes: 20, note: "Принципы проектирования с примерами" },
      { id: "m3", title: "FastAPI — Dependencies with yield", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_DEPS_YIELD, minutes: 15, note: "DI-контейнер FastAPI на практике" },
    ],
    tasks: [
      {
        id: "t1",
        title: "ARCHITECTURE.md для платформы",
        description: "Документ, который ответит на вопрос «как это устроено» на собеседовании.",
        requirements: [
          "C4/mermaid-диаграмма уровня Context: Client → API → PostgreSQL / Redis → Worker → Model",
          "Опиши слои: router → service → repository — что живёт в каждом и почему",
          "Перенеси логику POST /experiments из роутера в service (тонкий роутер)",
          "Опиши 3 сценария отказа: БД недоступна, Redis недоступен, задача упала",
        ],
        doneWhen: ["Диаграмма + описание слоёв в репо", "Роутер /experiments стал тонким"],
      },
    ],
    checklist: [
      "Прочитал(а) C4 model",
      "Понял(а) суть: слои и Ports & Adapters",
      "Выполнил(а) ARCHITECTURE.md",
      "Могу объяснить структуру платформы за 2 минуты",
    ],
  },
  {
    id: 16,
    week: 3,
    title: "Docker fundamentals",
    category: "Docker",
    difficulty: "Beginner",
    duration: 120,
    learn: "Что такое образ/контейнер/слой, как устроен docker build и как запустить наше FastAPI-приложение в контейнере. Без магии: только команды и наблюдения.",
    why: "С этой точки «у меня работает» = «работает у всех». Все последующие дни (Compose, Redis, воркер) — в контейнерах.",
    coreConcept: "образ, контейнер, слои",
    materials: [
      { id: "m1", title: "Docker — Get Started", source: "docs.docker.com", type: "tutorial", category: "Docker", url: DO_GETSTARTED, minutes: 45, note: "Концепции, первые контейнеры" },
      { id: "m2", title: "Docker — Build (BuildKit)", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_BUILD, minutes: 20, note: "Как собирается образ, кэш" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Первый контейнер experiment-api",
        description: "От hello-world до нашего приложения.",
        requirements: [
          "docker run: hello-world, затем postgres:16 с named volume (потренироваться)",
          "docker build + docker run для experiment-api (временно — простой Dockerfile)",
          "Проверь: Swagger из браузера через контейнер; docker logs, docker ps, docker inspect",
          "docker history: посмотри слои и отметь самый тяжёлый",
        ],
        doneWhen: ["Приложение работает в контейнере", "Слои образа понятны (видел history)"],
      },
    ],
    checklist: [
      "Прочитал(а) Docker Get Started",
      "Понял(а) суть: образ, контейнер, слои",
      "Выполнил(а) запуск приложения в контейнере",
      "Могу объяснить разницу image и container",
    ],
  },
  {
    id: 17,
    week: 3,
    title: "Dockerfile",
    category: "Docker",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Пишем Dockerfile как инженеры: python:3.12-slim, порядок слоёв ради кэша, venv вместо system-pip, .dockerignore, ENV vs ARG. Главный KPI — размер образа.",
    why: "Хороший Dockerfile — 30 строк. Плохой — 500 МБ и 20 минут сборки. Разницу видно сразу, и её спрашивают на собеседованиях.",
    coreConcept: "слои, кэш, slim-образ",
    materials: [
      { id: "m1", title: "Docker — Dockerfile Reference", source: "docs.docker.com", type: "docs", category: "Docker", url: DOCKERFILE_REF, minutes: 35, note: "Все инструкции и кэш слоёв" },
      { id: "m2", title: "uv — Python package manager", source: "docs.astral.sh", type: "docs", category: "Python", url: UV, minutes: 15, note: "Современная альтернатива pip в образе" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Dockerfile production-grade",
        description: "Перепишем вчерашний черновик так, как если бы образ пошёл в прод.",
        requirements: [
          "Базовый образ python:3.12-slim; зависимости в venv; .dockerignore",
          "Порядок слоёв: сначала requirements, потом код (кэш работает при правках кода)",
          "Non-root пользователь в контейнере",
          "Цель: образ на 30–50% меньше вчерашнего; зафиксируй размеры в доках",
        ],
        doneWhen: ["Образ собран, сервис работает, размер задокументирован", "Повторный build без изменений — быстрый (кэш)"],
      },
    ],
    checklist: [
      "Прочитал(а) Dockerfile Reference",
      "Понял(а) суть: слои, кэш, slim-образ",
      "Выполнил(а) production-grade Dockerfile",
      "Могу объяснить, почему порядок слоёв важен",
    ],
  },
  {
    id: 18,
    week: 3,
    title: "Docker Compose",
    category: "Docker",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Несколько контейнеров — это сервисы, которые должны разговаривать: сети, DNS по имени сервиса, volumes для данных, healthchecks для порядка старта.",
    why: "Одна команда docker compose up — и весь стек: api, postgres, redis. Так работает весь остаток месяца.",
    coreConcept: "services, volumes, networks, healthchecks",
    materials: [
      { id: "m1", title: "Docker Compose — Guide", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_COMPOSE, minutes: 35, note: "services, depends_on, healthchecks" },
      { id: "m2", title: "Docker — Volumes", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_VOLUMES, minutes: 15, note: "named vs bind, персистентность" },
      { id: "m3", title: "Docker — Networking", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_NETWORK, minutes: 10, note: "Сети, DNS между контейнерами" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Стек experiment-api",
        description: "Первый полноценный compose-стек.",
        requirements: [
          "docker-compose.yml: api (build .), postgres (volume, env, healthcheck pg_isready), redis",
          "depends_on с condition: service_healthy",
          "compose up → API в браузере пишет в реальную PG (через migrations)",
          "down + up: данные сохранились (проверь строки в psql)",
        ],
        doneWhen: ["Весь стек поднимается одной командой", "Персистентность проверена"],
      },
    ],
    checklist: [
      "Прочитал(а) Compose Guide",
      "Понял(а) суть: services, volumes, healthchecks",
      "Выполнил(а) compose-стек с 3 сервисами",
      "Могу объяснить, как контейнеры находят друг друга",
    ],
  },
  {
    id: 19,
    week: 3,
    title: "Redis",
    category: "Redis",
    difficulty: "Beginner",
    duration: 100,
    learn: "Redis — в первую очередь сверхбыстрое in-memory ключ-значение хранилище с типами: strings, hashes, lists, sets, zsets. Разберём типы, команды и где в нашей платформе он нужен (кэш, очереди, статусы).",
    why: "В финальной архитектуре Redis — и кэш, и broker для очереди задач. Понять типы = понять оба использования.",
    coreConcept: "типы данных, ключ-значение",
    materials: [
      { id: "m1", title: "Redis — Data Types", source: "redis.io", type: "docs", category: "Redis", url: REDIS_TYPES, minutes: 30, note: "Типы и их use-cases" },
      { id: "m2", title: "Redis — Commands", source: "redis.io", type: "docs", category: "Redis", url: REDIS_CMDS, minutes: 15, note: "Справочник команд" },
      { id: "m3", title: "Redis — Using Commands", source: "redis.io", type: "docs", category: "Redis", url: REDIS_USE, minutes: 15, note: "Базовые операции с примерами" },
    ],
    tasks: [
      {
        id: "t1",
        title: "redis-cli тренажёр",
        description: "Все 5 типов — руками в CLI, потом в API.",
        requirements: [
          "В redis-cli: SET/GET, HSET/HGETALL, LPUSH/LRANGE, SADD/SMEMBERS, ZADD/ZRANGE",
          "Храни experiment как hash (id, name, status) — покажи HGETALL",
          "Объясни в доках: какой тип для чего (session, счётчик, top-N, membership)",
          "Замени in-memory хранилище experiments на Redis (GET /experiments читает из Redis)",
        ],
        doneWhen: ["5 типов опробованы в CLI", "API читает experiments из Redis"],
      },
    ],
    checklist: [
      "Прочитал(а) Redis Data Types",
      "Понял(а) суть: типы данных Redis",
      "Выполнил(а) CLI-тренажёр и подключение к API",
      "Могу выбрать тип данных под задачу",
    ],
  },
  {
    id: 20,
    week: 3,
    title: "Caching и TTL",
    category: "Redis",
    difficulty: "Intermediate",
    duration: 100,
    learn: "Паттерн cache-aside: проверить кэш → промах → доехать до БД → положить в кэш с TTL. Разберём инвалидацию, проектирование ключей и почему «просто кэшировать всё» — плохая идея.",
    why: "Кэш — самый быстрый способ ускорить API. Но без TTL и инвалидации он становится источником stale-багов.",
    coreConcept: "cache-aside, TTL, инвалидация",
    materials: [
      { id: "m1", title: "Redis — Persistence", source: "redis.io", type: "docs", category: "Redis", url: REDIS_PERSIST, minutes: 20, note: "RDB/AOF: что переживает перезапуск — важно для кэша" },
      { id: "m2", title: "Redis — Using Commands (TTL)", source: "redis.io", type: "docs", category: "Redis", url: REDIS_USE, minutes: 20, note: "SET ... EX, GET, EXPIRE на практике" },
      { id: "m3", title: "Redis — Commands", source: "redis.io", type: "docs", category: "Redis", url: REDIS_CMDS, minutes: 10, note: "TTL, EXPIRE, PERSIST" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Кэш для /experiments/{id}",
        description: "Ускоряем самый горячий эндпоинт и фиксируем цифры.",
        requirements: [
          "Кэш-слой: key = exp:{id}, TTL = 300 с, клиент redis.asyncio",
          "Инвалидация: при PATCH /experiments/{id} удалить ключ",
          "Замер: 20 запросов с/без кэша — среднее время, запись в docs/cache.md",
          "Проверь TTL наживо: TTL exp:{id} в CLI",
        ],
        doneWhen: ["Второй запрос быстрее — зафиксировано в доках", "PATCH сбивает кэш"],
      },
    ],
    checklist: [
      "Прочитал(а) про персистентность и TTL",
      "Понял(а) суть: cache-aside, TTL, инвалидация",
      "Выполнил(а) кэш с замером",
      "Могу объяснить, когда кэш вредит",
    ],
  },
  {
    id: 21,
    week: 3,
    title: "Background jobs / Celery",
    category: "Backend",
    difficulty: "Intermediate",
    duration: 150,
    learn: "Длинная задача (запуск ML-эксперимента) не может жить в HTTP-запросе. Сегодня: очередь задач, Celery с Redis-брокером, состояния (queued/running/success/failed) и обновление статуса в БД.",
    why: "Это сердце финального продукта: POST /experiments/{id}/run → 202 → воркер крутит модель → статус виден в API.",
    coreConcept: "broker, worker, состояния задач",
    materials: [
      { id: "m1", title: "Celery — First Steps with Celery", source: "docs.celeryproject.org", type: "tutorial", category: "Backend", url: CEL_FIRST, minutes: 40, note: "tasks, broker, worker" },
      { id: "m2", title: "Celery — Brokers and Backends", source: "docs.celeryproject.org", type: "docs", category: "Backend", url: CEL_BROKERS, minutes: 15, note: "Redis как broker + result backend" },
      { id: "m3", title: "Celery — Workers", source: "docs.celeryproject.org", type: "docs", category: "Backend", url: CEL_WORKERS, minutes: 15, note: "Запуск воркера, concurrency" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Первая очередь в experiment-api",
        description: "Первый async-пайплайн: API не ждёт, статусы живут в БД.",
        requirements: [
          "Celery-приложение: broker=redis://redis:6379/1, backend=redis://redis:6379/2",
          "Задача run_experiment(experiment_id): sleep(5) + смена статусов queued → running → success",
          "POST /experiments/{id}/run → 202 + запуск задачи (apply_async)",
          "Статус виден в БД и в GET /experiments/{id}",
          "При ошибке задачи → status=failed + message",
        ],
        doneWhen: ["HTTP-запрос не блокируется, статусы уходят в БД", "Failed-путь проверен"],
      },
    ],
    checklist: [
      "Прочитал(а) Celery First Steps",
      "Понял(а) суть: broker, worker, состояния",
      "Выполнил(а) первую очередь с Celery",
      "Могу объяснить, почему BackgroundTasks не всегда достаточно",
    ],
  },

  // ─────────────────────────── WEEK 4 ───────────────────────────
  {
    id: 22,
    week: 4,
    title: "PyTorch fundamentals",
    category: "AI",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Тензоры, autograd, nn.Module — три вещи, из которых состоит любой PyTorch-код. Соберём полный training loop на toy-задаче из твоей домены: свойства полимера → состав (inverse design).",
    why: "Ты уже тренировал модели — сегодня цель: уверенный, воспроизводимый training loop как инженерный шаблон.",
    coreConcept: "тензор, autograd, training loop",
    materials: [
      { id: "m1", title: "PyTorch — Learn the Basics: Intro", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_INTRO, minutes: 40, note: "Тензоры, autograd, training loop" },
      { id: "m2", title: "PyTorch — Building the Neural Network", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_BUILDMODEL, minutes: 20, note: "nn.Module, слои, loss" },
      { id: "m3", title: "PyTorch — autograd (notes)", source: "pytorch.org", type: "docs", category: "AI", url: PT_AUTOGRAD, minutes: 15, note: "Градиенты, no_grad" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Training loop для inverse design",
        description: "Твоя доменная задача в PyTorch: 3 целевых свойства → 4 компонента состава.",
        requirements: [
          "Синтетический датасет: target_props (3D) → composition (4D) по формуле + шум",
          "Модель: MLP 3→64→64→4 (nn.Module) в app/ml/model.py",
          "app/ml/train.py: 50 эпох, Adam, MSELoss, лог train-loss по эпохам",
          "Loss сходится; checkpoint сохранён в model/checkpoint.pt",
        ],
        doneWhen: ["Скрипт обучается с нуля за минуты", "Loss-кривая убывает"],
      },
    ],
    checklist: [
      "Прочитал(а) PyTorch Intro",
      "Понял(а) суть: тензор, autograd, training loop",
      "Выполнил(а) training loop на toy-задаче",
      "Могу объяснить, что делает backward()",
    ],
  },
  {
    id: 23,
    week: 4,
    title: "Dataset + DataLoader",
    category: "AI",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Как данные доходят до модели: Dataset (индекс → образец), DataLoader (батчи, shuffle, workers), train/val split. Без этого не соберётся ни один нормальный training pipeline.",
    why: "DataLoader — тот же «паттерн по батчам», что и пагинация в API: абстракция, скрывающая итерацию. Красивое пересечение backend и ML.",
    coreConcept: "Dataset, батчинг, split",
    materials: [
      { id: "m1", title: "PyTorch — Datasets & DataLoaders", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_DATA, minutes: 35, note: "Dataset, DataLoader, батчинг" },
      { id: "m2", title: "PyTorch — Quickstart", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_QUICKSTART, minutes: 15, note: "Быстрый повтор цикла обучения" },
    ],
    tasks: [
      {
        id: "t1",
        title: "DataPipeline для inverse design",
        description: "Переводим «numpy в голове» на корректный data pipeline.",
        requirements: [
          "Кастомный TabularDataset (torch.utils.data.Dataset)",
          "DataLoader: batch_size=32, shuffle в train, seed для воспроизводимости",
          "Split 80/20: train/val; метрика val-loss по эпохам",
          "Обнови train.py на DataLoader",
        ],
        doneWhen: ["Val-loss отслеживается отдельно", "Обучение воспроизводится (seed)"],
      },
    ],
    checklist: [
      "Прочитал(а) Datasets & DataLoaders",
      "Понял(а) суть: Dataset, батчинг, split",
      "Выполнил(а) datapipeline с train/val",
      "Могу объяснить, зачем нужен DataLoader",
    ],
  },
  {
    id: 24,
    week: 4,
    title: "Training / validation / inference",
    category: "AI",
    difficulty: "Intermediate",
    duration: 120,
    learn: "Завершаем цикл: train mode vs eval mode, no_grad, оптимизатор и lr, как ловить overfitting. И первый шаг к inference: модель, которая предсказывает, а не учится.",
    why: "Разница model.train() и model.eval() — классическая «тихая» ошибка в ML-коде. Сегодня её не будет.",
    coreConcept: "train/eval, no_grad, overfitting",
    materials: [
      { id: "m1", title: "PyTorch — Optimizing Model Parameters", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_OPTIM, minutes: 30, note: "Adam, lr, полный цикл обучения" },
      { id: "m2", title: "PyTorch — CUDA Notes", source: "pytorch.org", type: "docs", category: "AI", url: PT_CUDA, minutes: 15, note: "device: cuda vs cpu" },
      { id: "m3", title: "PyTorch — Save and Load", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_SAVELOAD, minutes: 15, note: "Первый взгляд: state_dict" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Полный цикл: train → validate → predict",
        description: "Обучение с ранней остановкой и функция предсказания.",
        requirements: [
          "Обучение с train/val; early stopping (стоп, если val-loss не улучшался 10 эпох)",
          "Функция predict(model, inputs): model.eval() + torch.no_grad()",
          "Прогноз на 3 «новых» target_props → состав; проверь значения вручную",
          "Замерь время одного предсказания (CPU)",
        ],
        doneWhen: ["Early stopping работает", "predict() детерминирован (no_grad)"],
      },
    ],
    checklist: [
      "Прочитал(а) Optimizing Model Parameters",
      "Понял(а) суть: train/eval, no_grad, overfitting",
      "Выполнил(а) полный цикл с early stopping",
      "Могу объяснить, что сломается без no_grad",
    ],
  },
  {
    id: 25,
    week: 4,
    title: "Model checkpoints",
    category: "AI",
    difficulty: "Intermediate",
    duration: 100,
    learn: "Checkpoint — это состояние модели как файл: state_dict, метрики, версия, конфигурация. Разберём, что сохранять, как загружать безопасно (weights_only) и как версионировать артефакт.",
    why: "Без чекпоинтов модель — это «кто-то когда-то обучил». С meta.json — это артефакт, который можно выкатить в прод.",
    coreConcept: "state_dict, weights_only, версионирование",
    materials: [
      { id: "m1", title: "PyTorch — Save and Load", source: "pytorch.org", type: "tutorial", category: "AI", url: PT_SAVELOAD, minutes: 30, note: "state_dict, weights_only, паттерны" },
      { id: "m2", title: "PyTorch — TorchScript (torch.jit)", source: "pytorch.org", type: "docs", category: "AI", url: PT_JIT, minutes: 15, note: "Опционально: экспорт моделей (след. месяц)" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Артефакт модели",
        description: "Делаем из модели управляемый артефакт с метаданными.",
        requirements: [
          "model/checkpoint.pt: только state_dict (загрузка с weights_only=True)",
          "model/meta.json: features, метрики val, model_version, дата, seed",
          "app/ml/inference.py: ModelRunner — load один раз, predict(inputs)",
          "Скрипт: load → predict 100 входов → среднее время",
        ],
        doneWhen: ["ModelRunner предсказывает за миллисекунды", "meta.json с метаданными есть"],
      },
    ],
    checklist: [
      "Прочитал(а) Save and Load",
      "Понял(а) суть: state_dict и версионирование",
      "Выполнил(а) артефакт checkpoint + meta",
      "Могу объяснить, почему weights_only=True",
    ],
  },
  {
    id: 26,
    week: 4,
    title: "ML inference API",
    category: "AI",
    difficulty: "Advanced",
    duration: 120,
    learn: "Модель в FastAPI: валидация входа (Pydantic), ответ с метаданными (model_version, latency_ms) и ключевой вопрос — sync или async для CPU-bound inference (GIL, threadpool, event loop).",
    why: "Этот день задаёт тон всей ML-serving инженерии: большинство багов с производительностью API с моделью — из-за неверного выбора sync/async.",
    coreConcept: "serving, sync vs async, латентность",
    materials: [
      { id: "m1", title: "FastAPI — Async (FastAPI and Async)", source: "fastapi.tiangolo.com", type: "docs", category: "Backend", url: FA_ASYNC, minutes: 30, note: "Почему CPU-bound → def (threadpool), а не async" },
      { id: "m2", title: "Building ML-Powered Applications (Ameisen)", source: "mlpowered.com (O'Reilly)", type: "book", category: "AI", url: MLBOOK, minutes: 30, note: "Part IV: разделы о deployment" },
    ],
    tasks: [
      {
        id: "t1",
        title: "POST /predict",
        description: "Первый настоящий ML-эндпоинт.",
        requirements: [
          "Endpoint: Pydantic-модель входа (target_props: 3 float'а, с диапазонами)",
          "Ответ: { composition, model_version, latency_ms }",
          "Endpoint синхронный (def) — измерь p95 на 20 запросах",
          "Эксперимент: та же логика как async def — сравни throughput, запиши выводы в docs/ml-perf.md",
        ],
        doneWhen: ["p95 зафиксирован, выводы по sync/async в доках", "422 на неверных свойствах"],
      },
    ],
    checklist: [
      "Прочитал(а) FastAPI Async",
      "Понял(а) суть: sync vs async для CPU-bound",
      "Выполнил(а) POST /predict с замером",
      "Могу объяснить поведение GIL на этом примере",
    ],
  },
  {
    id: 27,
    week: 4,
    title: "FastAPI + PyTorch integration",
    category: "AI",
    difficulty: "Advanced",
    duration: 150,
    learn: "Собираем интеграцию: модель грузится один раз при старте (lifespan), живёт как синглтон, используется в /predict и в фоне. Ошибки модели → 500 с сообщением, а не traceback.",
    why: "Правильная интеграция = модель грузится один раз, а не на каждый запрос. Это и есть «AI backend» в чистом виде.",
    coreConcept: "lifespan, синглтон, обработка ошибок модели",
    materials: [
      { id: "m1", title: "FastAPI — Lifespan Events", source: "fastapi.tiangolo.com", type: "docs", category: "Backend", url: FA_EVENTS, minutes: 15, note: "Загрузка модели при старте" },
      { id: "m2", title: "FastAPI — Background Tasks", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_BG_TASKS, minutes: 20, note: "Когда хватает, а когда нужен Celery" },
      { id: "m3", title: "Building ML-Powered Applications", source: "mlpowered.com (O'Reilly)", type: "book", category: "AI", url: MLBOOK, minutes: 20, note: "ch. 14: Choose Your Deployment Option" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Модель в приложении",
        description: "Подключаем ModelRunner в lifecycle приложения.",
        requirements: [
          "Lifespan: при старте ModelRunner загрузит checkpoint; при shutdown — освобождение",
          "GET /model/info → { model_version, loaded_at, device, params }",
          "ModelError → 500 в едином формате (не traceback)",
          "Проверь: перезапуск приложения — модель грузится ровно один раз",
        ],
        doneWhen: ["/model/info отвечает", "500-обработка проверена"],
      },
    ],
    checklist: [
      "Прочитал(а) Lifespan Events",
      "Понял(а) суть: синглтон модели в lifespan",
      "Выполнил(а) интеграцию модели",
      "Могу объяснить, почему модель не грузят в каждом запросе",
    ],
  },
  {
    id: 28,
    week: 4,
    title: "Background ML tasks",
    category: "AI",
    difficulty: "Advanced",
    duration: 150,
    learn: "Соединяем всё: POST /experiments/{id}/run → 202 → Celery-воркер запускает модель, пишет результат в БД, обновляет статус. Воркер — отдельный процесс со своей копией модели.",
    why: "Финальный пайплайн из архитектуры: API → очередь → воркер → модель → БД → API. Если он работает — система собрана.",
    coreConcept: "асинхронный ML-пайплайн, состояния",
    materials: [
      { id: "m1", title: "Celery — Workers", source: "docs.celeryproject.org", type: "docs", category: "Backend", url: CEL_WORKERS, minutes: 25, note: "Конкурентность, очереди, запуск" },
      { id: "m2", title: "Celery — Tasks (configuration)", source: "docs.celeryproject.org", type: "docs", category: "Backend", url: CEL_TASKS, minutes: 20, note: "retries, acks_late, таймауты" },
      { id: "m3", title: "Celery — Next Steps", source: "docs.celeryproject.org", type: "docs", category: "Backend", url: CEL_NEXT, minutes: 15, note: "Вызовы задач, routing, оптимизация" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Пайплайн: run → модель → результат",
        description: "Тот самый flow из архитектуры, только с настоящей моделью.",
        requirements: [
          "Celery-task run_experiment: ModelRunner в воркере, прогноз по input experiment, результат в runs (JSONB)",
          "Статусы: queued → running → success/failed (+ error_message)",
          "autoretry_for=(ModelError,) с 2 попытками",
          "scripts/demo.sh: создать experiment → run → поллинг → вывести результат",
        ],
        doneWhen: ["demo.sh проходит end-to-end", "Retry при ошибке работает"],
      },
    ],
    checklist: [
      "Прочитал(а) Celery Workers + Tasks",
      "Понял(а) суть: асинхронный ML-пайплайн",
      "Выполнил(а) пайплайн с моделью в воркере",
      "Могу объяснить полный flow от POST до результата",
    ],
  },
  {
    id: 29,
    week: 4,
    title: "Dockerized AI service",
    category: "Docker",
    difficulty: "Advanced",
    duration: 150,
    learn: "Весь стек в Compose: api, worker, postgres, redis + volume с моделью. Dockerfile с PyTorch (CPU-сборка, чтобы образ не был 4 ГБ), healthchecks, orderly shutdown.",
    why: "Одна команда — и вся AI-платформа. Это артефакт недель 3+4, готовый к показу.",
    coreConcept: "compose для AI-стека, volume модели",
    materials: [
      { id: "m1", title: "Docker Compose — File Reference", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_COMPOSE_FILE, minutes: 30, note: "Все опции: env, healthchecks, volumes" },
      { id: "m2", title: "Docker — Volumes", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_VOLUMES, minutes: 10, note: "Модель в общем volume" },
      { id: "m3", title: "Docker Compose — Application Model", source: "docs.docker.com", type: "docs", category: "Docker", url: DO_COMPOSE_MODEL, minutes: 10, note: "Как compose оркестрирует сервисы" },
    ],
    tasks: [
      {
        id: "t1",
        title: "Финальный docker-compose",
        description: "4 сервиса + модель — в одном файле.",
        requirements: [
          "4 сервиса: api, worker (celery), postgres, redis + healthchecks",
          "Модель в общем volume (model volume) — не в образе",
          "PyTorch CPU-вариант в Dockerfile (torch --index-url cpu) — компактный образ",
          "docker compose up → полный демо-цикл из demo.sh",
        ],
        doneWhen: ["Стек поднимается с нуля за < 10 минут", "demo.sh работает против compose-стека"],
      },
    ],
    checklist: [
      "Прочитал(а) Compose File Reference",
      "Понял(а) суть: AI-стек в compose",
      "Выполнил(а) финальный compose",
      "Могу объяснить роль каждого сервиса",
    ],
  },
  {
    id: 30,
    week: 4,
    title: "Final project: AI Experiment Platform",
    category: "Backend",
    difficulty: "Advanced",
    duration: 180,
    learn: "Финальный день: доводим AI Experiment Platform до состояния «открыл README — понял — запустил». Тесты, документация, диаграмма, тег v1.0. Архитектура: React/Swagger → FastAPI → PostgreSQL → Redis → Worker → PyTorch.",
    why: "Этот репозиторий — твой портфолио-артефакт на позицию Backend / AI Engineer.",
    coreConcept: "полная система, документация, v1.0",
    materials: [
      { id: "m1", title: "FastAPI — Testing", source: "fastapi.tiangolo.com", type: "tutorial", category: "Backend", url: FA_TESTING, minutes: 30, note: "TestClient, фикстуры, API-тесты" },
      { id: "m2", title: "FastAPI — How-to Recipes", source: "fastapi.tiangolo.com", type: "docs", category: "Backend", url: FA_HOWTO, minutes: 15, note: "Закрыть оставшиеся пробелы" },
      { id: "m3", title: "Pro Git (free book)", source: "git-scm.com", type: "book", category: "Backend", url: PROGIT, minutes: 15, note: "Ветки, теги, чистая история" },
    ],
    tasks: [
      {
        id: "t1",
        title: "AI Experiment Platform v1.0",
        description: "Финальная сборка: всё, что ты строил 30 дней, — в одном чистом репозитории.",
        requirements: [
          "Тесты: 8+ pytest-кейсов (health, CRUD, 404, 422, predict)",
          "README: архитектура (диаграмма), quick start (docker compose up), curl-примеры",
          "ARCHITECTURE.md: C4-диаграмма + «зачем каждый компонент»",
          "Чистый down -v → up → полный цикл работает",
          "GitHub: тег v1.0",
        ],
        doneWhen: ["Финальный checklist (12 пунктов) закрыт", "Тег v1.0 в GitHub"],
      },
    ],
    checklist: [
      "FastAPI-приложение с роутерами и Swagger",
      "PostgreSQL-схема (experiments, runs) с ограничениями",
      "SQLAlchemy 2.0-модели + сессии",
      "Alembic-миграции (upgrade head)",
      "Redis-кэш с TTL",
      "Background worker (Celery) + задачи",
      "PyTorch-модель с checkpoint",
      "Inference endpoint (POST /predict)",
      "Docker (Dockerfile для api и worker)",
      "Docker Compose: api + worker + postgres + redis",
      "Тесты (pytest, зелёные)",
      "README + тег v1.0",
    ],
  },
];

export const lessonById = (id: number): Lesson => {
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) throw new Error(`Unknown lesson: ${id}`);
  return lesson;
};

export const weekOf = (dayId: number): Week =>
  WEEKS.find((w) => w.days.includes(dayId)) ?? WEEKS[0];
