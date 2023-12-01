import Transition from "@/components/common/Transition"
export default function Template({ children }) {
  return (
    <main>
    <Transition/>
      {children}
    </main>
  )}
