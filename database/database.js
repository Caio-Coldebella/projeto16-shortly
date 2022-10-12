import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
    connectionString: "postgres://postgres:nand2tetris@localhost:5432/shortly"
});

export default connection;