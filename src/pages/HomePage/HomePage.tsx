import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/Navbar';
import styles from './HomePage.module.css';
import axios from 'axios';

const HomePage: React.FC = () => {

  const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
  return (
   <>
    <NavBar/>
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 > DND Worksheet </h1>
        <ul>
            {users.map((user, index) => (
              <>
                <li key={index}>Name: {user.firstName} {user.lastName} Email: {user.email}</li>
              </>
                      
            ))}
        </ul>
      </div>
    </div>
   </>
  );
}

export default HomePage;
