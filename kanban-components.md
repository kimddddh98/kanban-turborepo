# Kanban Board Component Proposal

## 개요

칸반 보드를 구성할 때 필요한 UI 컴포넌트를 역할 기준으로 정리한 문서입니다.  
초기 MVP 범위와 이후 확장 범위를 나눠서 설계할 수 있도록 구성했습니다.

---

## Core

- `Board`
  보드 전체 레이아웃과 컬럼 그룹 컨테이너
- `BoardHeader`
  보드 제목, 필터, 멤버, 액션 영역
- `Column`
  `Todo`, `Doing`, `Done` 같은 상태 컬럼
- `ColumnHeader`
  컬럼 이름, 카드 수, 컬럼 액션
- `Card`
  작업 단위 표시용 핵심 컴포넌트
- `CardContent`
  제목, 설명, 메타 정보 묶음
- `CardFooter`
  담당자, 마감일, 라벨, 체크리스트 진행도 표시
- `AddCardButton`
  컬럼 하단 빠른 추가
- `AddColumnButton`
  새 컬럼 추가

---

## Task Input / Edit

- `TaskForm`
  카드 생성/수정 폼
- `TaskTitleInput`
  작업 제목 입력
- `TaskDescriptionEditor`
  설명 입력
- `TaskAssigneeSelect`
  담당자 선택
- `TaskLabelSelect`
  라벨 선택
- `TaskDueDatePicker`
  마감일 설정
- `TaskPrioritySelect`
  우선순위 설정
- `ChecklistEditor`
  체크리스트 추가/편집

---

## Interaction

- `DragHandle`
  카드나 컬럼 드래그 핸들
- `DropIndicator`
  드롭 위치 시각화
- `CardMenu`
  카드 우클릭 또는 더보기 메뉴
- `ColumnMenu`
  컬럼 액션 메뉴
- `InlineEditableText`
  제목/컬럼명 인라인 수정
- `ConfirmDialog`
  삭제 확인
- `Modal`
  카드 상세 보기 및 편집
- `Popover`
  빠른 편집, 날짜, 라벨 선택 등에 사용

---

## Metadata / Visualization

- `Avatar`
  담당자 표시
- `AvatarGroup`
  여러 담당자 표시
- `StatusBadge`
  상태 텍스트
- `PriorityBadge`
  우선순위 표시
- `LabelChip`
  태그/카테고리 표시
- `DueDateBadge`
  마감일 상태 표시
- `ProgressBar`
  체크리스트 진행률
- `AttachmentPreview`
  첨부파일 미리보기
- `CommentCount`
  댓글 수 표시

---

## Board Management

- `FilterBar`
  담당자, 라벨, 상태, 마감일 필터
- `SearchInput`
  카드 검색
- `SortMenu`
  정렬 옵션
- `ViewSwitcher`
  보드/리스트 전환
- `BoardTabs`
  프로젝트/보드 전환
- `MemberPicker`
  보드 참여자 선택

---

## Feedback / Empty States

- `EmptyColumnState`
  컬럼이 비었을 때 표시
- `EmptyBoardState`
  보드 초기 상태
- `SkeletonCard`
  로딩 UI
- `Toast`
  저장/삭제 결과 알림

---

## 권장 우선순위

1. `Board`
2. `Column`
3. `Card`
4. `ColumnHeader`
5. `AddCardButton`
6. `TaskForm`
7. `Modal`
8. `LabelChip`
9. `PriorityBadge`
10. `Avatar`

---

## 단계별 구현 제안

### 1. MVP

- `Board`
- `Column`
- `Card`
- `ColumnHeader`
- `AddCardButton`

### 2. 입력 / 수정

- `TaskForm`
- `Modal`
- `InlineEditableText`

### 3. 메타데이터

- `Avatar`
- `LabelChip`
- `PriorityBadge`
- `DueDateBadge`

### 4. 고급 인터랙션

- `DragHandle`
- `DropIndicator`
- `FilterBar`
- `SearchInput`

---

## 메모

- 처음부터 모든 컴포넌트를 만들기보다, 보드 렌더링과 카드 생성 흐름이 동작하는 MVP부터 만드는 편이 낫습니다.
- 이후 메타데이터와 인터랙션을 추가하면서 확장하는 구조가 유지보수에 유리합니다.
- `packages/ui` 기준으로 설계한다면 추후 `atoms / molecules / organisms`로도 재정리할 수 있습니다.
