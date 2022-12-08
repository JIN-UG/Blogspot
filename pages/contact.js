import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (<>
        <main className={styles.container}>
            <h1 className={styles.title}>
                Contact Us
            </h1>

            <div class="mb-3">
                <label for="name" class="form-label">Your Post Title</label>
                <input type="text" class="form-control" id="name" placeholder="name@example.com" />
            </div>

            <div class="mb-3">
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                            <label for="floatingInputGrid">Your name</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                            <label for="floatingInputGrid">Your Email address</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                            <label for="floatingInputGrid">Your  name</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                            <label for="floatingInputGrid">Your Email address</label>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mb-3">
                <label for="Content" class="form-label">Post Content</label>
                <textarea class="form-control" id="Content" rows="5"></textarea>
            </div>

            <div class="mb-3">
                <label for="category" class="form-label">Post Category</label>
                <select class="form-select" aria-label="Default select example" id="category">
                    <option selected>Select Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                    <option value="4">Category 4</option>
                    <option value="5">Category 5</option>
                </select>
            </div>


            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I Want Post Right Nopw
                    </label>
                </div>
            </div>
            <div className={styles.grid}>
                <div class="mb-3">
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile01">Upload Post Image</label>
                        <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>

                </div>
            </div>












        </main>
    </>

    )
}
