interface NoticeItem {
  noticeId: number;
  title: string;
}

export interface NoticesResponse {
  notices: NoticeItem[];
}
