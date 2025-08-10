function BuggyComponent() {
  throw new Error("💥 I crashed!");
  // This will cause rendering to break
  return <div>You will never see me</div>;
}

export default BuggyComponent;
