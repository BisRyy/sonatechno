export default function FooterSection() {
  return (
    <footer className="py-6 md:px-8 md:py-16">
      <div className="container flex flex-col items-center justify-between gap-2 md:h-24">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={"https://linkedin.com/in/bisry"}
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4"
          >
            Bisrat Kebere
          </a>
          .
        </p>
        <div className="text-center text-lg text-muted-foreground">
          &copy; {new Date().getFullYear()}
          <span className="font-bold"> Innovate Fusion. </span>
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
