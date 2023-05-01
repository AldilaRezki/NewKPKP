### Setup Back-End

**Pastikan berada di folder *YookLearn BE***

#### 1. Run Migration
```
php artisan migrate:fresh --seed --seeder=DatabaseSeeder
```

#### 2. Run Server
```
php artisan serve
```

### Setup Front-End

**Pastikan berada di folder *YookLearn FE***

#### 1. Instal Node Package
```
npm install
```

#### 2. Run App
```
npm run dev
```