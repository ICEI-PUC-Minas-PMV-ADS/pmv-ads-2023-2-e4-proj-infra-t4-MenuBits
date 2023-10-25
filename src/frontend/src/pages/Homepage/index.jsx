import { Button } from "../../components/Buttons";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-center text-3xl text-orange-400 mb-4">HomePage</h1>

      <div className="flex justify-center align-middle flex-row gap-2">
        <Button>Primary</Button>
        <Button $variant="secondary">Secondary</Button>
        <Button $rounded>Rounded</Button>
      </div>
    </div>
  )
}