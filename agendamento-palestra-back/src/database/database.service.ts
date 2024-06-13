import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private pool: mysql.Pool;

  constructor(private configService: ConfigService) {
    this.pool = mysql.createPool({
      host: this.configService.get<string>('DB_HOST'),
      user: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(query: string, params: any[] = []): Promise<any> {
    const [results] = await this.pool.execute(query, params);
    return results;
  }

  async getConnection(): Promise<mysql.PoolConnection> {
    return this.pool.getConnection();
  }
}
