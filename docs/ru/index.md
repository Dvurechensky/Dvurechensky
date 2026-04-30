---
layout: default
title: 'Николай Двуреченский - инженерное резюме'
description: 'Systems Engineer, .NET Developer, Reverse Engineer, Full Stack Engineer'
date: 2026-04-27
lang: ru
published: true
---

{% raw %}

<div align="center" style="margin: 20px 0; padding: 10px; background: #1c1917; border-radius: 10px;" class="lang-switch">
  <strong>Language:</strong>
  <span style="color: #F5F752; margin: 0 10px;">Russian current</span>
  |
  <a href="/Dvurechensky/en/" style="color: #0891b2; margin: 0 10px;">English</a>
  |
  <a href="/Dvurechensky/rnd/ru/" style="color: #a3e635; margin: 0 10px;">R&D версия</a>
</div>

{% endraw %}

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
  <a href="#rnd">R&D</a>
</div>

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="profile">Коротко</h2>

Инженер на стыке backend-разработки, системного анализа, reverse engineering, desktop-инструментов, игровых серверов и инфраструктуры. С 2014 года развиваюсь в программировании и реверсе; коммерчески работал с .NET, Unity, C++, Python, Linux/Windows, PostgreSQL, RabbitMQ, Docker, CI и системами визуализации.

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

<h2 id="value">Чем я полезен работодателю</h2>

- Быстро разбираюсь в незнакомой кодовой базе, протоколах, форматах данных и старых системах.
- Проектирую backend-сервисы на .NET, интеграции, очереди, БД и административные панели.
- Пишу инструменты, которые экономят время команде: анализаторы, генераторы, конвертеры, diff/monitoring utilities, шаблоны проектов.
- Работаю с Windows/Linux, Docker, Jenkins, Git/SVN, PostgreSQL, RabbitMQ, Redis, nginx.
- Веду задачу от исследования до релиза: гипотеза, прототип, реализация, отладка, документация, поддержка.
- Спокойно работаю с legacy, reverse engineering, C/C++, ABI, DLL, x86, Ghidra/x32dbg/IDA-подходами и низкоуровневой диагностикой.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="achievements">Ключевые достижения</h2>

### Reverse Engineering и системный анализ

- **Freelancer.Reverse.Runtime:** runtime-слой поверх оригинального движка Freelancer (2003), где DLL-модули заменяются совместимыми proxy-компонентами с контролируемым C++-кодом, логированием и восстановлением поведения.
- **ReverseProxyDLL:** генератор reverse-aware proxy DLL scaffold для legacy x86 Windows DLL, учитывающий exports, ordinals, ABI, C/C++ symbols, data exports и ручные override-сценарии.
- **BinNexus:** инструмент анализа Windows DLL/EXE, который строит интерактивный web-портал с графом зависимостей, экспортами, поиском символов и фильтрацией системного шума.
- C++/ASM-экосистема Freelancer/Lizerium: плагины, серверные расширения, игровые DLL, форматы данных, tooling и администрирование.

### .NET, backend и инфраструктура

- ASP.NET Core MVC приложения с PostgreSQL, EF Core, RabbitMQ, Docker, Jenkins, Git/SVN.
- Миграции .NET Framework -> .NET 6/7/8, архитектурная стабилизация, зависимости и сборки.
- Система мониторинга пентестов: сбор данных, визуализация, аналитика, серверная логика и интерфейс.
- **Lizerium Server:** модульная ASP.NET Core MVC платформа для игрового портала, admin backend, базы знаний, документации, переводов, внутренних сервисов и сетевой защиты.
- **Unifier:** зарегистрированная программная система для распределенного взаимодействия устройств и инфраструктурной оркестрации.

### Desktop, tooling и автоматизация

- **FileSync Sentinel:** .NET 8 WinForms приложение для real-time мониторинга изменений файлов, визуального diff, логирования и синхронизации больших наборов `.ini`.
- **Herodotus:** WPF/Prism MVVM инструмент для сценариев презентаций и демонстраций с Markdown preview.
- **LibreResxTranslate:** NuGet-библиотека для автоматизированной локализации `.resx` ресурсов через LibreTranslate.
- Шаблоны: Telegram bot template, ASP.NET Core MVC template, Electron/Vue/Vite template.

### Unity, game development и VR

- OXSIONSOFT/Lizerium, **Ceek Virtual Reality**: фичи, bug fixing, redesign UI, клиент-серверные улучшения.
- Оптимизация памяти через **Unity Addressables**, улучшение стабильности на Android 7+.
- Unity3D, HDRP, VFX Graph, Zenject, Addressables, Photon Engine, Blender, Substance, Photoshop.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="experience">Опыт работы</h2>

### OXSIONSOFT / Lizerium

**Unity Developer**  
**Март 2021 - 2026, 5+ лет**

- Разработка функциональности, исправление ошибок и redesign интерфейсов для VR/Unity-проектов.
- Оптимизация памяти через Addressables и улучшение стабильности мобильных сборок.
- Multiplayer на Photon Engine, клиент-серверные API улучшения, технические спецификации.

### Московский институт психоанализа

**Технический специалист**  
**Февраль 2020 - настоящее время, 6+ лет**

- Техническая поддержка онлайн-видеоплатформы и живых трансляций.
- Помощь 1000+ пользователям разных возрастов и устройств в подключении к образовательным мероприятиям.

### NPC Reagent / SIGMA / CMK Consulting

**.NET Developer**  
**2019 - 2025, 5+ лет суммарно**

- ASP.NET Core MVC приложения, PostgreSQL, EF Core, RabbitMQ, Docker.
- Визуализация зависимостей C#/C++ проектов и NuGet-графов.
- Миграции .NET Framework -> .NET 6/7/8, refactoring, архитектурная стабилизация.
- Системы мониторинга, аналитики и визуализации для security/pentest процессов.

### Freelancer Rebirth

**C++ Developer**  
**Ноябрь 2020 - ноябрь 2023, 3 года**

- Поддержка крупного СНГ-мода для Freelancer (2003).
- Миграция 25+ плагинов и ядра в унифицированное C++ решение.
- 3 крупные миграции проекта между поколениями Visual Studio.

### ИнтерЭВМ / ЦИТиС

**Системный инженер**  
**Февраль 2020 - июнь 2023, 3+ года**

- Системы мониторинга на Qt, анализаторы данных на Python/PHP.
- XSLT/XML шаблоны, оптимизация PostgreSQL-запросов.
- Astra Linux, Ubuntu, Debian, Windows.

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="projects">Избранные проекты</h2>

| Проект                                                                                   | Что показывает работодателю                                                                     | Технологии                            |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- |
| [Freelancer.Reverse.Runtime](https://github.com/Dvurechensky/Freelancer.Reverse.Runtime) | Reverse engineering, C++ runtime layer, совместимые DLL, восстановление поведения legacy engine | C, C++, ASM x86, Ghidra, x32dbg       |
| [ReverseProxyDLL](https://github.com/Dvurechensky/ReverseProxyDLL)                       | Генерация proxy DLL scaffold для старых Windows x86 библиотек                                   | Python, C++                           |
| [BinNexus](https://github.com/Dvurechensky/BinNexus)                                     | Анализ DLL/EXE, граф зависимостей, export explorer, web-visualization                           | Python, JavaScript, C++, HTML/CSS     |
| [Lizerium Server](https://github.com/Lizerium/LizeriumServer)                            | Модульная серверная платформа для портала, админки, документации и сервисов                     | ASP.NET Core MVC, EF Core, PostgreSQL |
| [FileSync Sentinel](https://github.com/Dvurechensky-Tools/FileSyncSentinel)              | Desktop-инструмент для мониторинга, diff и синхронизации файлов                                 | .NET 8, WinForms, DiffPlex            |
| [Herodotus](https://github.com/Dvurechensky-Tools/Heradotus)                             | WPF/MVVM приложение для сценариев демонстраций и Markdown workflow                              | WPF, Prism MVVM, HandyControl         |
| [LibreResxTranslate](https://github.com/Dvurechensky-Tools/LibreResxTranslate)           | NuGet-библиотека для автоматизации локализации .NET приложений                                  | C#, .NET, RESX, LibreTranslate        |

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="stack">Технологический стек</h2>

**Backend / .NET:** C#, .NET Framework, .NET 6/7/8, ASP.NET Core MVC, SignalR, EF Core, xUnit, NUnit  
**Databases / Messaging:** PostgreSQL, SQL Server, MySQL, Redis, RabbitMQ  
**Infrastructure:** Docker, Jenkins, nginx, Git, SVN, Gitea, Linux, Windows  
**Frontend / Visualization:** TypeScript, JavaScript, Cytoscape.js, Three.js, HTML5, SCSS/CSS, Webpack, Grunt  
**Desktop:** WPF, Prism MVVM, HandyControl, WinForms, FastColoredTextBox, Costura/Fody  
**Reverse / Low-level:** C, C++, ASM x86, DLL proxying, ABI, exports/ordinals, PE analysis, IDA Pro, OllyDbg, Ghidra, x32dbg  
**Game / Unity:** Unity3D, HDRP, URP, VFX Graph, Zenject, Addressables, Photon Engine, object pooling, ECS-подходы  
**Other languages:** Python, Go, PHP, Shell/Bash, Qt, XSLT/XML, Elixir, Fortran77

<div align="center">
  <img src="https://github.com/Dvurechensky/Dvurechensky/blob/main/Media/arrow.png?raw=true" width="150px" alt="separator">
</div>

<h2 id="rnd">R&D версия</h2>

Это основная HR/product-oriented версия резюме. Более полная экспериментальная версия со старым GitHub-дизайном, диаграммами, social-блоками и расширенным каталогом проектов сохранена отдельно:

- [Открыть R&D версию](/Dvurechensky/rnd.ru.html)
- [Open English version](/Dvurechensky/)

> 2026
