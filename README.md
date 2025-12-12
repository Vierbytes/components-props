# Component Library

Reusable React components with TypeScript and retro anime styling.

## Components

### AlertBox

Shows alerts with different types (success, error, warning, info).

```tsx
<AlertBox type="success" message="Done!" onClose={() => {}} />
```

### UserProfileCard

Displays user info with avatar.

```tsx
<UserProfileCard user={user} showEmail={true} onEdit={(id) => {}} />
```

### ProductDisplay

Shows product with price and stock status.

```tsx
<ProductDisplay product={product} onAddToCart={(id) => {}} />
```

## Setup

```bash
npm install
npm run dev
```

## Reflection

**What are props in React?**
Props are data passed from parent to child components.

**How do you pass data between components?**
Use props to send data down to child components.

**What is the benefit of reusable components?**
You can use the same component multiple times without rewriting code.

**How does TypeScript improve React development?**
TypeScript catches errors and helps know what props components need.
