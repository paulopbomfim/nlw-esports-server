<div align="center" >
  <img src="./readmeImages/Logo.png"/>
</div>

# NLW eSports API

---


## Entidades

- Users
  - id            - uuid        - PK
  - email         - string
  - password      - string
  - discord       - string
  - created_at    - datetime
  - updated_at    - datetime
- Games
  - id            - uuid        - PK
  - name          - string
  - banner_url    - string
- Ads
  - id            - uuid        - PK
  - years_played  - int
  - week_days     - string
  - hours_start   - int
  - hours_end     - int
  - voice_chat    - boolean
  - created_at    - datetime
  - updated_at    - datetime
  - game_id       - uuid        - FK
  - user_id       - uuid        - FK

---

## Tecnologias

- NodeJS
- TypeScript
- Vitest (alternativa ao Jest)
- Prisma
- Docker
- ESLint

---

## Como testar
### Para rodar a aplicação será necessário instalar o Node

- Clone o Repositório
- Digite o comando no terminal:
  ```
  npm install
  ```
- Em seguida digite:
  ```
  npm run dev
  ```

- Acesse a documentação completa em `localhost:3333/api-docs`