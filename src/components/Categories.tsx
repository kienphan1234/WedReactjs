import categories1 from '../assets/categories1.jpg';
import categories2 from '../assets/categories2.jpg';
import categories3 from '../assets/categories3.jpg';

const categories = [
  {
    name: 'Amply',
    image: categories1,
  },
  {
    name: 'Loa',
    image: categories2,
  },
  {
    name: 'Đồ gia dụng',
    image: categories3,
  }
];

const Categories = () => {
  return (
    <section className="bg-blue-500 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-white tracking-tight mb-12 text-center font-bold">
          Khám phá Danh mục
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-xl">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay làm tối ảnh để chữ nổi lên */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{category.name}</h3>
                <button className="text-white text-sm font-semibold flex items-center gap-2 group-hover:text-amber-400 transition">
                  Xem ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;