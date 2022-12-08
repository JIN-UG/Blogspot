import Link from 'next/link'
export default function Footer(){
    return <> 
   <div class="card text-center">
   <div class="card-header">
    Footer
  </div>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="/about">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="/about">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="/about">Link</Link>
  </li>
</ul>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    </>
}