
import { Truck, ShieldCheck, Headphones, RotateCcw } from 'lucide-react';

const badges = [
  { icon: Truck, title: 'Giao hàng hỏa tốc', desc: 'Trong 2h tại nội thành' },
  { icon: ShieldCheck, title: 'Bảo hành tại cửa hàng', desc: '12 tháng toàn quốc' },
  { icon: Headphones, title: 'Hỗ trợ kĩ thuật 24/7', desc: 'Đội ngũ chuyên gia' },
  { icon: RotateCcw, title: 'Đổi trả miễn phí', desc: 'Trong 7 ngày đầu' },
];

const TrustBadges = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-5 text-left p-6 bg-blue-500 rounded-2xl shadow-lg">
            <div className="p-4 bg-white rounded-full border border-amber-500/20 text-amber-500">
              <badge.icon size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-lg">{badge.title}</h4>
              <p className="text-white text-sm leading-tight">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;