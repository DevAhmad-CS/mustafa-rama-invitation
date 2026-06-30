export default function ShimmerText({ as: Tag = 'span', className = '', children }) {
  return <Tag className={`shimmer-text ${className}`}>{children}</Tag>
}
