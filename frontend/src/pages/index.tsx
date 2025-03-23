
import { useEffect, useState } from 'react';
import api from '../lib/api';

export default function Home() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get('/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('error'));
  }, []);

  return <div>API Health: {status}</div>;
}
