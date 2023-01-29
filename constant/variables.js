export const variables = {
  loadPictureMethod: {
    byGallery: "byGallery",
    byCamera: "byCamera",
  },
  formName: {
    title: 'title',
    price: 'price'
  },

  uploadFormRules: {
    title: {
      required: {
        value: true,
        message: "사진 제목은 필수 입니다",
      },
      maxLength: {
        value: 12,
        message: "사진 제목은 최대 12글자 입니다",
      },
      minLength: {
        value: 4,
        message: "사진 제목은 최소 4글자 입니다",
      },
      pattern: {
        value: /[A-Za-z]/,
        message:
          "사진 제목은 오직 영문만 허용 합니다",
      },
    },
    price: {
      required: {
        value: true,
        message: "사진 가격은 필수 입니다",
      },
      maxLength: {
        value: 8,
        message: "최대 8자리 숫자",
      },
      minLength: {
        value: 4,
        message: "최소 4자리 숫자",
      },
      pattern: {
        value: /[0-9]/,
        message: "오직 숫자만 입력 가능",
      },
    }
  }
};
