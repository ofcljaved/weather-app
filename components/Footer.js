export default function Footer() {
  return (
    <footer className="text-xl tracking-wide mx-auto">
      {`Copyright © ${new Date().getFullYear()} Weather Now. All rights reserved.`}
    </footer>
  );
}
