/**
 * 특정 ID를 가진 요소로 스크롤을 이동시키는 함수
 * @param elementId - 스크롤할 요소의 ID
 * @param options - 스크롤 옵션 (behavior, block)
 */
export const scrollToElement = (
  elementId: string,
  options: ScrollIntoViewOptions = { behavior: "smooth", block: "start" },
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView(options);
  } else {
    console.warn(`Element with id "${elementId}" not found`);
  }
};

/**
 * app-form ID를 가진 요소로 스크롤을 이동시키고 name input에 focus를 설정하는 함수
 */
export const scrollToAppForm = (): void => {
  const form = document.getElementById("app-form");
  if (form) {
    const nameInput = form.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;
    if (nameInput) {
      nameInput.focus();
      scrollToElement("app-form");
    }
  }
};
