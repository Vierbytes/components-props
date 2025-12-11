import { useState } from 'react';
import AlertBox from './components/AlertBox';
import UserProfileCard from './components/UserProfileCard';
import ProductDisplay from './components/ProductDisplay';
import type { User, Product } from './types';
import coolAvatar from './assets/coolblkani.jpeg';
import product1 from './assets/amam.jpeg';
import product2 from './assets/butyblk.jpeg';
import './App.css';

function App() {
  const [alerts, setAlerts] = useState({
    success: true,
    error: true,
    warning: true,
    info: true,
  });

  const users: User[] = [
    { id: '1', name: 'Sakura', email: 'sakura@anime.jp', role: 'Hero', avatarUrl: coolAvatar },
    { id: '2', name: 'Naruto', email: 'naruto@leaf.jp', role: 'Ninja' },
  ];

  const products: Product[] = [
    { id: 'p1', name: 'Anime Figure', price: 49.99, description: 'Limited edition collectible', imageUrl: product1, inStock: true },
    { id: 'p2', name: 'Art Print', price: 24.99, description: 'Premium poster', imageUrl: product2, inStock: false },
  ];

  return (
    <div className="app">
      <h1>⚡ Retro Anime Components ⚡</h1>

      <section>
        <h2>Alerts</h2>
        {alerts.success && (
          <AlertBox type="success" message="Mission Complete!" onClose={() => setAlerts(prev => ({ ...prev, success: false }))} />
        )}
        {alerts.error && (
          <AlertBox type="error" message="Error! Try again!" onClose={() => setAlerts(prev => ({ ...prev, error: false }))} />
        )}
        {alerts.warning && (
          <AlertBox type="warning" message="Low health warning!" onClose={() => setAlerts(prev => ({ ...prev, warning: false }))} />
        )}
        {alerts.info && (
          <AlertBox type="info" message="New episode available!" onClose={() => setAlerts(prev => ({ ...prev, info: false }))}>
            <p>Check it out now!</p>
          </AlertBox>
        )}
      </section>

      <section>
        <h2>Characters</h2>
        <div className="grid">
          <UserProfileCard user={users[0]} onEdit={(id) => alert(`Edit ${id}`)} />
          <UserProfileCard user={users[1]} showEmail={false}>
            <p>Member since 2024</p>
          </UserProfileCard>
        </div>
      </section>

      <section>
        <h2>Products</h2>
        <div className="grid">
          <ProductDisplay product={products[0]} onAddToCart={(id) => alert(`Added ${id}`)} />
          <ProductDisplay product={products[1]} showDescription={false} />
        </div>
      </section>
    </div>
  );
}

export default App;
