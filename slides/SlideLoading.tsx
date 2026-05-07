/** Placeholder estable mientras carga el chunk de una diapositiva (evita CLS en transiciones). */
export default function SlideLoading() {
  return (
    <div
      className="min-h-screen w-full bg-transparent"
      aria-busy="true"
      aria-label="Cargando diapositiva"
    />
  );
}
