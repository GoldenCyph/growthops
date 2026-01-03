# GrowthOps – Conversion Tracking & Analytics Dashboard

GrowthOps is a production-style Next.js application that demonstrates how growth and product teams can instrument user journeys, track conversion events, and visualize activity through an internal dashboard.

The project focuses on **reliability, measurability, and operational clarity**, rather than feature volume.

---

## Problem Statement

Growth and marketing teams require accurate, real-time visibility into how users interact with key product entry points (such as sign-ups).  
Manual tracking or poorly instrumented analytics leads to unreliable decision-making.

This project simulates a direct-to-consumer growth pipeline where user actions are:
- Tracked consistently
- Persisted to a backend
- Made visible to internal stakeholders

---

## Core Features

- Next.js App Router architecture
- Firebase-backed event ingestion
- Conversion event tracking (e.g. sign-up clicks)
- Auth-protected internal dashboard
- Daily conversion visualization using charts
- Clean separation of concerns (UI, analytics, infrastructure)

---

## Architecture Overview

### Frontend
- **Next.js (App Router)** for routing and layout
- Client components used selectively for interactive views
- Centralized analytics abstraction for event tracking

### Analytics Layer
- All user events pass through a single `trackEvent` function
- Event names are defined centrally to prevent inconsistencies
- Events are timestamped and stored for auditability

### Backend
- **Firebase Firestore** used as an event store
- Server timestamps ensure consistency
- Authentication protects internal dashboards

### Dashboard
- Internal-only views display conversion activity
- Charts surface daily trends for quick decision-making
- Layout mirrors common enterprise internal tools

---

## Folder Structure

```txt
src/
├─ app/
│  ├─ (auth)/login
│  ├─ (dashboard)/events
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ lib/
│  ├─ analytics/
│  │  ├─ events.ts
│  │  └─ track.ts
│  └─ firebase/
│     ├─ client.ts
│     └─ auth.ts
