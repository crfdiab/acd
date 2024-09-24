import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { FooterButtons } from "./footer";
import { DialogTitle } from "./ui/dialog";
import DocsMenu from "./docs-menu";

export function Leftbar() {
  return (
    <aside className="md:flex hidden flex-[1] min-w-[235px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
      <div className="py-4">
        <DocsMenu />
      </div>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="mx-2 px-5">
            <DocsMenu isSheet />
          </div>
          <div className="p-6 pb-4 flex gap-2.5">
            <FooterButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}