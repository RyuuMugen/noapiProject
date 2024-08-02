import { Metadata } from 'next'
import BuildPc from './xay-dung-cau-hinh/page'

export const metadata: Metadata = {
  title: 'Xây dựng cấu hình',
  description:
    'Chúng tôi chuyên cung cấp dịch vụ cấu hình PC tối ưu về hiệu năng và giá cả trên Shopee và Lazada. Với kinh nghiệm, chúng tôi giúp bạn chọn linh kiện tốt nhất, đảm bảo máy tính hoạt động mượt mà và mạnh mẽ với chi phí hợp lý. Trải nghiệm dịch vụ để sở hữu bộ PC hoàn hảo cho nhu cầu của bạn!',
  openGraph: {
    images: [
      {
        url: 'https://buildpc.vn/_next/image?url=https%3A%2F%2Fdown-cvs-vn.img.susercontent.com%2Fvn-11134207-7r98o-lnl028tbbylp61.webp&w=256&q=75',
        height: 100,
        width: 200,
        alt: 'image buildpc',
      },
    ],
  },
}

export default function Page() {
  return (
    <main>
      <BuildPc />
    </main>
  )
}
