# My Fridge

My Fridge is a mobile‑first, single‑page golf dashboard designed to help golfers track their performance and organize their bag in a clean, modern interface. Built with pure HTML, CSS, and JavaScript, My Fridge focuses on elegant dark‑mode visuals, simple data displays, and smooth interactions.

---

## Overview

My Fridge combines two core functions:

1. **Performance Tracker**
   - Displays current handicap
   - Shows scoring average
   - Tracks rounds played
   - Visualizes stats with simple line and bar graphs
   - Uses **GHIN** data as the primary source of statistics

2. **Bag Organizer**
   - Log and manage clubs in your bag
   - Store hitting yardage, brand, loft, and other details
   - Keep a structured overview of your equipment for quick reference

The goal is a single, focused dashboard page with a clean layout and ample negative space, optimized for mobile devices and still looking great on larger screens.

---

## Features

### Dashboard Layout

- **Single‑page design** (`index.html`)
- **Multiple card layout** with a maximum content width of **480px**
- Sections/cards may include:
  - Handicap & scoring overview
  - Rounds played summary
  - Weather widget for the user’s region
  - Line and bar charts for performance trends
  - Bag organizer card with club details

### Visual Design

- **Dark mode** as the default theme
- Primary colorway:
  - Complimentary **neon green** and **turquoise** accents
  - **White lettering** for maximum legibility
- Charts use a **warm accent color** that pairs well with the primary green
- **Modern font** choice for a contemporary, sporty feel
- **Elegant design** emphasizing:
  - Ample negative space
  - Clear hierarchy
  - Minimal clutter

### Interactions & Animations

- **Smooth hover animations** on link buttons and interactive elements
- Subtle transitions for card hover/focus states to reinforce the modern feel
- Focus on simple, performant CSS transitions (no heavy animation libraries)

### Weather Tracker

- A **weather widget** tailored to the user’s region:
  - Current conditions (temperature, conditions, wind)
  - Golf‑relevant information where possible (e.g., wind speed)
- Implemented using JavaScript and a weather API (e.g., OpenWeatherMap or similar)

### Bag Organizer

- Structured list or card view of clubs:
  - **Club type** (driver, irons, wedges, putter, etc.)
  - **Brand / model**
  - **Loft**
  - **Typical yardage**
  - Optional notes (e.g., “good in wind”, “favorite off the tee”)
- Potential enhancements:
  - Filtering by club type
  - Sorting by yardage or loft

---

## Technology Stack

My Fridge is intentionally lightweight and framework‑free.

- **HTML**  
  - Single `index.html` file
  - Semantic structure for cards, charts, and forms

- **CSS**  
  - Custom stylesheet (e.g., `styles.css`)
  - Dark theme, responsive layout, and card styling
  - Utility classes for spacing and typography
  - Smooth hover states and transitions

- **JavaScript**  
  - No frameworks or build tools
  - Handles:
    - Data fetching (e.g., GHIN data via API if available, and weather API)
    - Chart rendering (simple custom charts or minimal vanilla JS chart logic)
    - State management for the bag organizer
    - Basic local storage for user data (optional)

> **Note:** There are no external frameworks (React, Vue, etc.) and no bundlers or build tools. The site is a static deployment.

---

## Data Sources

### GHIN

My Fridge uses **GHIN** as the main source of golf stats (handicap, scoring average, rounds played).

- Official site: https://www.ghin.com/
- Integration approach:
  - If an official GHIN API is available and permitted, JavaScript can fetch user stats.
  - If not, the app can:
    - Accept manual input from the user
    - Or import/export data via CSV or simple forms

The README and code should clearly document any required credentials or manual steps for GHIN data integration.

### Weather API

A weather API (e.g., OpenWeatherMap) is used for regional weather data.

- Typical requirements:
  - API key stored via environment variables in Vercel or a simple config file
  - JavaScript fetch calls to retrieve current conditions
- The README should specify:
  - How to set the API key
  - Any usage limits or configuration options

---

## Accessibility & Contrast

Because My Fridge is dark‑mode first, attention is given to accessibility:

- High contrast between text and backgrounds
- Sufficient contrast ratios for neon green and turquoise against dark surfaces
- Clear focus states for interactive elements
- Legible font sizes and spacing for mobile users

---

## Deployment

My Fridge is deployed as a static site on **Vercel**.

### Project Structure

```text
/
├─ index.html
├─ styles.css
└─ script.js