export default function MobileOnlyScreen() {
  return (
    <div className="mobile-only-screen flex min-h-[100svh] w-full flex-col items-center justify-center bg-[#F7EDEA] px-8 text-center">
      <p className="font-display text-[1.35rem] leading-relaxed text-[#2B1B2F]">
        هذا الموقع مخصص للموبايل فقط
      </p>
      <p className="mt-4 font-body text-[1rem] font-light leading-relaxed text-[#2B1B2F]/70">
        يرجى فتح الدعوة من هاتفك المحمول
      </p>
    </div>
  )
}
