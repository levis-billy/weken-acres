export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-[#D8D2C4] bg-[#F1ECE3] text-center">
      <span className="px-6 text-sm font-medium text-[#9A9184]">{label}</span>
    </div>
  );
}
