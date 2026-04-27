<div align="center" style="margin: 20px 0; padding: 10px; background: #1c1917; border-radius: 10px;">
  <strong>Language:</strong>
  <span style="color: #F5F752; margin: 0 10px;">Russian current</span>
  |
  <a href="./README.md" style="color: #0891b2; margin: 0 10px;">English</a>
  |
  <a href="./README.rnd.ru.md" style="color: #a3e635; margin: 0 10px;">R&D версия</a>
</div>

<div align="center">
  <picture>
    <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/me.gif?raw=true" width="150px" alt="Nikolai Dvurechensky">
  </picture>
  <h2>
    Привет, я <span style="color:#F5F752;">Николай Двуреченский</span><br>
    Systems Engineer • .NET Developer • Reverse Engineer • Full Stack Engineer
  </h2>
  <h4>Инженер для сложных систем, legacy, backend-платформ, tooling и R&D-задач</h4>
  <span><b>.NET</b> • C/C++ • C# • Python • Unity • TypeScript • Reverse • Linux • Windows</span>
</div>

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<div align="center">
  <a href="#profile">Профиль</a> ·
  <a href="#value">Польза</a> ·
  <a href="#achievements">Достижения</a> ·
  <a href="#experience">Опыт</a> ·
  <a href="#projects">Проекты</a> ·
  <a href="#stack">Стек</a> ·
  <a href="#fit">Роли</a>
</div>

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="profile"></a>

## Коротко

Инженер, который умеет работать на стыке backend-разработки, системного анализа, reverse engineering, desktop-инструментов, игровых серверов и инфраструктуры. С 2014 года развиваюсь в программировании и реверсе; коммерчески работал с .NET, Unity, C++, Python, Linux/Windows, PostgreSQL, RabbitMQ, Docker, CI и системами визуализации.

Ищу сильную команду и продукт, где важны не только "писать код", но и разбираться в сложных системах, восстанавливать архитектуру, проектировать инструменты, доводить решения до рабочего состояния и оставлять после себя понятную инженерную базу.

- **10+ лет инженерного опыта:** от reverse engineering онлайн-игр и системного администрирования до .NET backend, Unity, C++ и инфраструктурных сервисов.
- **Сильная зона:** сложные системы, legacy-код, бинарный анализ, .NET-инструменты, серверные платформы, визуализация зависимостей, автоматизация и документация.
- **Публичный след:** десятки репозиториев и проектов в экосистемах `Dvurechensky`, `Lizerium`, `Dvurechensky Tools`, `Dvurechensky Docs`, `Templates`, `Test Tasks`.
- **Редкое сочетание:** backend + desktop + reverse + game/server engineering + умение объяснять и документировать сложные вещи.

**Контакты:** [dvurechenskysoft@gmail.com](mailto:dvurechenskysoft@gmail.com) / [nikolay@dvurechensky.pro](mailto:nikolay@dvurechensky.pro)  
**Сайт:** [dvurechensky.pro](https://dvurechensky.pro)  
**GitHub:** [github.com/Dvurechensky](https://github.com/Dvurechensky)  
**ORCID:** [0009-0004-2701-5592](https://orcid.org/0009-0004-2701-5592)

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="value"></a>

## Чем я полезен работодателю

Я особенно полезен там, где продукту нужен инженер, который:

- быстро разбирается в незнакомой кодовой базе, протоколах, форматах данных и старых системах;
- проектирует backend-сервисы на .NET, интеграции, очереди, БД и административные панели;
- пишет инструменты, которые экономят время команде: анализаторы, генераторы, конвертеры, diff/monitoring utilities, шаблоны проектов;
- работает с Windows/Linux, Docker, Jenkins, Git/SVN, PostgreSQL, RabbitMQ, Redis, nginx;
- ведет задачу от исследования до релиза: гипотеза, прототип, реализация, отладка, документация, поддержка;
- спокойно работает с legacy, reverse engineering, C/C++, ABI, DLL, x86, Ghidra/x32dbg/IDA-подходами и низкоуровневой диагностикой.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="achievements"></a>

## Ключевые достижения

### Reverse Engineering и системный анализ

- Разрабатываю **Freelancer.Reverse.Runtime**: runtime-слой поверх оригинального движка Freelancer (2003), где DLL-модули заменяются совместимыми proxy-компонентами с контролируемым C++-кодом, логированием и восстановлением поведения.
- Создал **ReverseProxyDLL**: генератор reverse-aware proxy DLL scaffold для legacy x86 Windows DLL, учитывающий exports, ordinals, ABI, C/C++ symbols, data exports и ручные override-сценарии.
- Создал **BinNexus**: инструмент анализа Windows DLL/EXE, который строит интерактивный web-портал с графом зависимостей, экспортами, поиском символов и фильтрацией системного шума.
- Поддерживал и развивал C++/ASM-экосистему Freelancer/Lizerium: плагины, серверные расширения, игровые DLL, форматы данных, tooling и администрирование.

### .NET, backend и инфраструктура

- Разрабатывал **ASP.NET Core MVC** приложения с PostgreSQL, EF Core, RabbitMQ, Docker, Jenkins, Git/SVN.
- Мигрировал проекты с .NET Framework на .NET 6/7/8, улучшал архитектуру по SOLID/DRY/KISS, наводил порядок в зависимостях и сборках.
- Проектировал систему мониторинга пентестов: сбор данных, визуализация, аналитика, серверная логика и интерфейс.
- Развиваю **Lizerium Server**: модульную ASP.NET Core MVC платформу для игрового портала, admin backend, базы знаний, документации, переводов, внутренних сервисов и сетевой защиты.
- Имею зарегистрированную программную систему **Unifier** для распределенного взаимодействия устройств и инфраструктурной оркестрации.

### Desktop, tooling и автоматизация

- Создал **FileSync Sentinel**: .NET 8 WinForms приложение для real-time мониторинга изменений файлов, визуального diff, логирования и синхронизации больших наборов `.ini`.
- Создал **Herodotus**: WPF/Prism MVVM инструмент для сценариев презентаций и демонстраций с Markdown preview.
- Создал **LibreResxTranslate**: NuGet-библиотеку для автоматизированной локализации `.resx` ресурсов через LibreTranslate, включая batch-режим, конфигурации и сценарии CI/CD.
- Поддерживаю набор шаблонов: Telegram bot template, ASP.NET Core MVC template, Electron/Vue/Vite template.

### Unity, game development и VR

- В OXSIONSOFT/Lizerium работал над **Ceek Virtual Reality**: фичи, bug fixing, redesign UI, клиент-серверные улучшения.
- Реализовывал оптимизацию памяти через **Unity Addressables**, улучшая стабильность на Android 7+.
- Работал с Unity3D, HDRP, VFX Graph, Zenject, Addressables, Photon Engine, Blender, Substance, Photoshop.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="experience"></a>

## Опыт работы

### OXSIONSOFT / Lizerium
**Unity Developer**  
**Март 2021 - 2026, 5+ лет**

- Разработка функциональности, исправление ошибок и redesign интерфейсов для VR/Unity-проектов.
- Оптимизация памяти через Addressables и улучшение стабильности мобильных сборок.
- Multiplayer на Photon Engine, клиент-серверные API улучшения, технические спецификации.
- Стек: Unity3D, C#, HDRP, VFX Graph, Zenject, Addressables, Photon, Docker, Blender, Substance, Photoshop.

### Московский институт психоанализа
**Технический специалист**  
**Февраль 2020 - настоящее время, 6+ лет**

- Техническая поддержка онлайн-видеоплатформы и живых трансляций.
- Помощь 1000+ пользователям разных возрастов и устройств в подключении к образовательным мероприятиям.
- Стек: Windows, macOS, MTS-Link, пользовательская диагностика, поддержка live-событий.

### NPC Reagent / SIGMA / CMK Consulting
**.NET Developer**  
**2019 - 2025, 5+ лет суммарно**

- ASP.NET Core MVC приложения, PostgreSQL, EF Core, RabbitMQ, Docker.
- Визуализация зависимостей C#/C++ проектов и NuGet-графов.
- Миграции .NET Framework -> .NET 6/7/8, рефакторинг, архитектурная стабилизация.
- Системы мониторинга, аналитики и визуализации для security/pentest процессов.
- CI/CD и сборки через Jenkins, работа с Git/SVN.

### Freelancer Rebirth
**C++ Developer**  
**Ноябрь 2020 - ноябрь 2023, 3 года**

- Поддержка крупного СНГ-мода для Freelancer (2003).
- Миграция 25+ плагинов и ядра в унифицированное C++ решение.
- 3 крупные миграции проекта между поколениями Visual Studio.
- Стек: C++, Boost, Assembler x86, Git, legacy Windows tooling.

### ИнтерЭВМ / ЦИТиС
**Системный инженер**  
**Февраль 2020 - июнь 2023, 3+ года**

- Системы мониторинга на Qt, анализаторы данных на Python/PHP.
- XSLT/XML шаблоны, оптимизация PostgreSQL-запросов.
- Работа в окружениях Astra Linux, Ubuntu, Debian, Windows.

### Ранние роли
**2017 - 2020**

- Инженер по автоматизации: Siemens controllers, SCADA, embedded systems.
- Системный администратор: автоматизация рабочих мест и документооборота.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="projects"></a>

## Избранные проекты

| Проект | Что показывает работодателю | Технологии |
|---|---|---|
| [Freelancer.Reverse.Runtime](https://github.com/Dvurechensky/Freelancer.Reverse.Runtime) | Reverse engineering, C++ runtime layer, совместимые DLL, восстановление поведения legacy engine | C, C++, ASM x86, Ghidra, x32dbg |
| [ReverseProxyDLL](https://github.com/Dvurechensky/ReverseProxyDLL) | Генерация proxy DLL scaffold для старых Windows x86 библиотек | Python, C++ |
| [BinNexus](https://github.com/Dvurechensky/BinNexus) | Анализ DLL/EXE, граф зависимостей, export explorer, web-visualization | Python, JavaScript, C++, HTML/CSS |
| [Lizerium Server](https://github.com/Lizerium/LizeriumServer) | Модульная серверная платформа для портала, админки, документации и сервисов | ASP.NET Core MVC, EF Core, PostgreSQL |
| [Lizerium / Freelancer Lizerium](https://lizup.ru/Home/Game) | C++/ASM game server engineering, 50+ plugin ecosystem, multiplayer tooling | C++, ASM x86, WPF, .NET |
| [FileSync Sentinel](https://github.com/Dvurechensky-Tools/FileSyncSentinel) | Desktop-инструмент для мониторинга, diff и синхронизации файлов | .NET 8, WinForms, DiffPlex |
| [Herodotus](https://github.com/Dvurechensky-Tools/Heradotus) | WPF/MVVM приложение для сценариев демонстраций и Markdown workflow | WPF, Prism MVVM, HandyControl |
| [LibreResxTranslate](https://github.com/Dvurechensky-Tools/LibreResxTranslate) | NuGet-библиотека для автоматизации локализации .NET приложений | C#, .NET, RESX, LibreTranslate |
| [Telegram Bot Template](https://github.com/Dvurechensky-Templates/TelegramBotTemplate) | Чистая многослойная архитектура для масштабируемых Telegram-ботов | Python, asyncio, APIs |
| [NetCoreTemplate](https://github.com/Dvurechensky-Templates/NetCoreTemplate) | База для ASP.NET Core MVC проектов | ASP.NET Core, TypeScript |

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="stack"></a>

## Технологический стек

**Backend / .NET:** C#, .NET Framework, .NET 6/7/8, ASP.NET Core MVC, SignalR, EF Core, xUnit, NUnit  
**Databases / Messaging:** PostgreSQL, SQL Server, MySQL, Redis, RabbitMQ  
**Infrastructure:** Docker, Jenkins, nginx, Git, SVN, Gitea, Linux, Windows  
**Frontend / Visualization:** TypeScript, JavaScript, Cytoscape.js, Three.js, HTML5, SCSS/CSS, Webpack, Grunt  
**Desktop:** WPF, Prism MVVM, HandyControl, WinForms, FastColoredTextBox, Costura/Fody  
**Reverse / Low-level:** C, C++, ASM x86, DLL proxying, ABI, exports/ordinals, PE analysis, IDA Pro, OllyDbg, Ghidra, x32dbg  
**Game / Unity:** Unity3D, HDRP, URP, VFX Graph, Zenject, Addressables, Photon Engine, object pooling, ECS-подходы  
**Other languages:** Python, Go, PHP, Shell/Bash, Qt, XSLT/XML, Elixir, Fortran77  
**Security / Diagnostics:** Burp Suite Pro, runtime logging, binary inspection, dependency analysis, integration testing

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<a id="fit"></a>

## Какая роль мне особенно подходит

- **.NET Backend / Full Stack Engineer** для продуктовой разработки, внутренних платформ, admin systems, интеграций и инфраструктурных сервисов.
- **Systems Engineer** для сложных систем, мониторинга, визуализации, автоматизации, Linux/Windows окружений.
- **Reverse Engineer / C++ Engineer** для legacy Windows, DLL, x86, runtime tooling, binary analysis и восстановления поведения.
- **Tools Engineer / Developer Productivity Engineer** для внутренних инструментов, генераторов, шаблонов, анализаторов, CI/CD и документации.
- **Unity / Game Tools Engineer** для игровых сервисов, runtime-логики, tooling, оптимизации и multiplayer-интеграций.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

## R&D версия

Эта страница теперь является основной HR/product-oriented версией резюме. Более полная и экспериментальная версия с GitHub-экосистемой, диаграммами, social-блоками, donation-блоком и расширенным каталогом проектов сохранена отдельно:

- [Открыть R&D README](./README.rnd.ru.md)
- [Открыть English version](./README.md)

> 2026
