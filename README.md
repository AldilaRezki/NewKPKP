### Setup Back-End

**Pastikan berada di folder *YookLearn BE***

#### 1. Setting database
**Pada file *env* di folder "YookLearn BE" Silahkan setting pada line ke 11-16 sesuai dengan database pada laptop masing-masing**

#### 2. Run Migration
```
php artisan migrate:fresh --seed --seeder=DatabaseSeeder
```

#### 3. Run Server
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