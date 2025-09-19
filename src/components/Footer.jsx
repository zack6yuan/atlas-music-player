export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 sm:mt-50">&copy; {year} Atlas School</div>;
}
