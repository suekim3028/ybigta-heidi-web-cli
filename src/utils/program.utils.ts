import { ProgramTypes } from "@types";
import { commonUtils } from "@utils";

export const getProgramThumbnail = (
  program: Pick<ProgramTypes.Mini, "category" | "id">
) => {
  const obj: Record<ProgramTypes.Category, string[]> = {
    등산로: [
      "https://image.newsis.com/2022/05/21/NISI20220521_0001002724_web.jpg",
      "https://travel.taichung.gov.tw/content/images/content/experience/hiking-trails/hiking-trails-banner-08.jpg",
      "https://travel.taichung.gov.tw/content/images/content/experience/hiking-trails/hiking-trails-banner-03.jpg",
    ],
    "산림 치유원": [
      "https://www.kyongbuk.co.kr/news/photo/201802/1017401_298073_5001.jpg",
      "https://cdn.yjinews.com/news/photo/201901/50003_48488_427.jpg",
      "https://san.chosun.com/news/photo/201703/10783_44476_4737.jpg",
      "https://pds.skyedaily.com/top_image/202103/125138_p.jpg",
    ],
    "숲 체험": [
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/sYGGmwDegFrGeDgwlpnYvDXQbpfDdZLy.png",
      "https://img.khan.co.kr/news/2020/07/13/l_2020071301001626900125791.jpg",
      "https://m.pressian.com/data/photos/cdn/20190519/art_1557470205.jpg",
      "https://cdn.kado.net/news/photo/202306/1187884_618642_2114.jpg",
    ],
    숲길: [
      "https://cdn.latimes.kr/news/photo/202309/50953_62092_2645.jpg",
      "https://api.cdn.visitjeju.net/photomng/imgpath/202212/07/ae5e98b3-3d87-422b-bdce-40928b5df596.jpg",
      "https://img.hani.co.kr/imgdb/resize/2021/0521/162149126241_20210521.JPG",
      "https://ilyo.co.kr/contents/article/images/2018/0619/1529371184722527.jpg",
    ],
  };

  const arr = obj[program.category];
  return arr[program.id % arr.length];
};
