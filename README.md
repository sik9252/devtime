## 기술 스택

- Next.js v16 (App Router)
- TypeScript
- Tailwind CSS v4
- Storybook 10.1.11
- Vitest

## 사용 가능한 명령어

```bash
pnpm dev              # Next.js 개발 서버
pnpm build            # Next.js 빌드
pnpm start            # Next.js 프로덕션 서버
pnpm lint             # ESLint 실행
pnpm test             # Vitest 테스트 실행
pnpm test:ui          # Vitest UI 모드
pnpm test:coverage    # 테스트 커버리지
pnpm storybook        # Storybook 개발 서버
pnpm build-storybook  # Storybook 빌드
```

## 프로젝트 구조 (FSD Architecture)

```
devtime/
├── src/
│   ├── app/                  # Next.js App Router (FSD app layer)
│   │   ├── globals.css      # Tailwind CSS 전역 스타일
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shared/              # 공유 리소스 (ui, lib, api, hooks, config 등)
│   │   ├── ui/              # UI 컴포넌트
│   │   │   └── button/      # 버튼 컴포넌트
│   │   │       ├── button.tsx            # 컴포넌트 구현
│   │   │       ├── button.stories.tsx    # Storybook 스토리
│   │   │       ├── button.test.tsx       # Vitest 테스트
│   │   │       └── index.ts
│   │   └── lib/             # 유틸리티 함수
│   │       └── utils.ts     # cn() 함수 등
│   ├── entities/            # 비즈니스 엔티티
│   ├── features/            # 사용자 기능
│   ├── widgets/             # 독립적인 UI 블록
│   └── pages/               # 페이지 컴포지션
├── .storybook/             # Storybook 설정
│   ├── main.ts
│   └── preview.ts
├── components.json         # Shadcn/ui 설정
├── vitest.config.ts        # Vitest 설정
└── vitest.setup.ts         # Vitest 초기 설정
```

### FSD 레이어 설명

- **app**: 애플리케이션 초기화, 프로바이더, 라우팅 (Next.js App Router)
- **pages**: 페이지별 컴포지션 레이어
- **widgets**: 독립적인 UI 블록 (헤더, 사이드바 등)
- **features**: 사용자 상호작용 기능 (좋아요, 댓글 작성 등)
- **entities**: 비즈니스 엔티티 (사용자, 게시물 등)
- **shared**: 재사용 가능한 공유 리소스 (UI 컴포넌트, 유틸리티 등)

## 커밋 컨벤션

이 프로젝트는 다음과 같은 커밋 메시지 규칙을 따릅니다:

| 타입       | 설명                                     | 예시                                  |
| ---------- | ---------------------------------------- | ------------------------------------- |
| `feat`     | 새로운 기능 추가                         | `feat: 로그인 페이지 구현`            |
| `fix`      | 버그 수정                                | `fix: 모바일에서 버튼 깨짐 현상 수정` |
| `docs`     | 문서 수정 (README, 주석 등)              | `docs: API 문서 업데이트`             |
| `style`    | 코드 포맷팅 (로직 변경 없음)             | `style: 프리티어 설정 적용`           |
| `refactor` | 리팩토링 (기능 변경 없이 코드 구조 개선) | `refactor: 회원가입 로직 분리`        |
| `test`     | 테스트 코드 추가/수정                    | `test: 로그인 버튼 유닛 테스트 추가`  |
| `chore`    | 빌드 설정, 패키지 매니저 설정 등         | `chore: 패키지 의존성 업데이트`       |
| `perf`     | 성능 개선                                | `perf: 이미지 로딩 속도 개선`         |

### 커밋 메시지 자동 검증 (Husky + Commitlint)

이 프로젝트는 **Husky**와 **Commitlint**를 사용하여 커밋 메시지 규칙을 자동으로 검증합니다.

#### 작동 방식

- 커밋 시 자동으로 메시지 형식을 검증
- 규칙에 맞지 않는 커밋 메시지는 자동으로 거부됩니다

#### 올바른 형식

```bash
# ✅ 성공
git commit -m "feat: 로그인 기능 추가"
```

#### 잘못된 형식

```bash
# ❌ 실패 - 타입이 없음
git commit -m "로그인 기능 추가"

# ❌ 실패 - 잘못된 타입
git commit -m "feature: 로그인 기능 추가"

# ❌ 실패 - 콜론(:) 누락
git commit -m "feat 로그인 기능 추가"

# ❌ 실패 - subject가 비어있음
git commit -m "feat: "
```

#### Git Hooks 설정

**commit-msg hook** (`.husky/commit-msg`)

- 커밋 메시지 형식 검증
- 규칙: `타입: 메시지` 형식 강제

**pre-commit hook** (`.husky/pre-commit`)

- 커밋 전 ESLint 실행
- 코드 품질 기본 체크
