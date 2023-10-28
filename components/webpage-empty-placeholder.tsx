import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ImageEmptyPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <Dialog>
          <DialogTrigger>
            <svg
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 2048 2048"
              className="text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6b7280"
                d="M1664 1664h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256zM384 128v1536h768v128H256V0h859l549 549v731h-128V640h-512V128H384zm768 91v293h293l-293-293z"
              />
            </svg>
          </DialogTrigger>

          <h3 className="mt-4 text-lg font-semibold">No webpage added</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            You have not added any webpage. Click + to add.
          </p>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Webpage</DialogTitle>
              <DialogDescription>
                Copy and paste the webpage URL to import.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Webpage URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/example-web-page"
                />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Webpage</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
