import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export default function EditMentor() {
  return (
    <div>
      <Popover>
        <PopoverHandler>
          <Button variant="gradient">Show Popover</Button>
        </PopoverHandler>
        <PopoverContent>
          This is a very beautiful popover, show some love.
        </PopoverContent>
      </Popover>
    </div>
  );
}
