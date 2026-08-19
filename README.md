# IDEA Lab website

Korea University IDEA Lab의 공식 홈페이지 소스입니다. Next.js App Router로 작성되며, 모든 공개 페이지를 정적 HTML로 생성해 GitHub Pages에 배포합니다. 서버나 데이터베이스 없이 저장소의 콘텐츠와 이미지를 기준으로 운영합니다.

## Prerequisites

- Node.js `>=22.13.0`
- pnpm 11

`pnpm-lock.yaml`이 운영 배포의 기준 잠금 파일입니다. 설치와 업데이트에는 pnpm만 사용합니다.

## Quick Start

```bash
pnpm install
pnpm dev
```

개발 주소는 `http://localhost:3001`입니다. 배포 전에는 다음 명령으로 코드, 정적 빌드, 전체 경로, 내부 링크, 이미지와 앵커를 한 번에 검증합니다.

```bash
pnpm check
```

결과물은 `out/`에 생성됩니다. 정적 결과물만 로컬에서 확인하려면 `pnpm preview`를 실행합니다.

## Project structure

- `app/`: 페이지와 공통 UI
- `app/content/`: 사람, 논문, 뉴스, 강의, 연구, 행사 데이터
- `app/content/site.ts`: 사이트명, 대표 연락처, 공식 도메인, 주 메뉴
- `public/media/`: 용도별 실제 이미지
- `site.config.mjs`: 유지해야 하는 공개 URL과 GitHub Pages 경로 설정
- `tests/`: 주요 콘텐츠 및 기존 URL 회귀 테스트
- `scripts/validate-static-output.mjs`: 생성된 내부 링크와 자산 검증
- `.github/workflows/deploy-pages.yml`: `main` 브랜치 자동 배포

콘텐츠 추가 방법은 [`app/content/README.md`](app/content/README.md), 이미지 규칙은 [`public/media/README.md`](public/media/README.md)를 따릅니다.

## GitHub Pages operation

1. 연구실 소유 저장소의 `Settings → Pages → Source`를 `GitHub Actions`로 설정합니다.
2. `main`에 반영된 변경은 검증을 통과한 뒤 자동 배포됩니다.
3. GitHub Pages가 제공하는 배포 경로를 빌드에서 자동 사용하므로, 일반 프로젝트 주소와 커스텀 도메인 모두 같은 워크플로로 처리합니다.
4. `idea.korea.ac.kr`은 저장소의 Pages 설정에서 Custom domain으로 등록한 뒤 학교 DNS에 CNAME을 연결합니다. 코드나 Actions variable을 별도로 바꿀 필요는 없습니다.
5. 도메인을 연결하기 전 GitHub 계정에서 해당 도메인을 먼저 검증하고, Pages의 HTTPS 적용 상태를 확인합니다.

기존 임시 Sites/Cloudflare 설정은 원격 사이트 복구용으로만 보존되어 있으며, 현재 Next.js 빌드와 GitHub Pages 배포에는 포함되지 않습니다.

## URL preservation

외부에 공개된 주소는 삭제하거나 임의로 바꾸지 않습니다. 페이지를 옮길 때는 이전 경로를 alias 페이지로 남기고 `site.config.mjs`와 테스트에 함께 추가합니다. GitHub Pages에는 서버 redirect가 없으므로 alias도 실제 HTML로 생성해야 합니다.

## Update policy

- 사람은 삭제하지 않고 `status`로 현재 구성원과 alumni를 구분합니다.
- 사이트명, 대표 이메일, 공식 도메인과 주 메뉴는 `app/content/site.ts`에서만 수정합니다.
- 논문 ID는 `연도-학회-짧은제목` 형식으로 고정하고, 같은 ID를 뉴스와 이미지 파일명에도 사용합니다.
- 논문 뉴스 이미지는 publication ID에서 자동으로 가져옵니다.
- 직접 관련된 사진이 없으면 뉴스 이미지 필드를 비워 둡니다.
- 행사 사진은 `YYYY-MM-event-description.ext`처럼 내용이 드러나는 파일명을 사용합니다.
- 변경 후 반드시 `pnpm check`를 통과시킵니다.
- 콘텐츠 ID가 중복되면 빌드가 즉시 실패하도록 검증합니다.

## Useful Commands

- `pnpm dev`: 개발 서버
- `pnpm build`: GitHub Pages용 정적 HTML 생성
- `pnpm test`: 생성된 페이지와 내부 링크·자산 검증
- `pnpm check`: 배포 전 전체 검사
- `pnpm preview`: 정적 결과물 로컬 확인

## References

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
