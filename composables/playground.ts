export function usePlayground() {
  const rounded = useState<'none' | 'sm' | 'md' | 'lg' | 'full'>('rounded', () => 'sm')
  return {
    rounded,
  }
}
