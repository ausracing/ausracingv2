export default function MediaGrid() {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
        Image 1
      </div>

      <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
        Image 2
      </div>

      <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
        Image 3
      </div>

    </section>
  );
}