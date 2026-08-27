import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import style from './Productdetailspage.module.scss';

export function Productdetailspage() {
    const { id } = useParams();
    const { data: product, isLoading, error } = useFetch(`http://localhost:4000/api/products`);

    const [dataComments, setDataComments] = useState([]);
    const [dataText, setDataText] = useState('');

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const isLoggedIn = Boolean(token && user);

useEffect(() => {
    if (product?.comments) {
        setDataComments(product.comments);
    }
}, [product]);

async function handleSubmit(event) {
    event.preventDefault();

    if (!isLoggedIn || !dataText.trim())  {
        return;
}

    const response = await fetch(`http://localhost:4000/api/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            productId: Number(id),
            comment: dataText,
        }),
    });
        if (!response.ok) { return;
}

        const newComment = await response.json();

        setDataComments((previousComments) => [
       newComment,
       ...previousComments,
]);
setDataText('');
}

async function handleDelete(commentId) {
    if (!isLoggedIn) {
        return;
} 

    const response = await fetch(`http://localhost:4000/api/comments/${commentId}`, 
        {
        method: 'DELETE',
        headers: {
            
            'Authorization': `Bearer ${token}`,
        },
        
        }
    );

    if (!response.ok) { return;
    }

    setDataComments((previousComments) => 
        previousComments.filter(
            (comment) => comment.id !== commentId,
),
    )
}


function handleSellerComment(comment) {
    const commentUserId = comment.userId || comment.user?.id;
    const sellerUserId = product.userId || product.seller?.id;
    return String(commentUserId) === String(sellerUserId);

}

function handleEditComment(comment) {
    const commentUserId = comment.userId || comment.user?.id;
    
    return String(commentUserId) === String( user?.id); 
}

if (isLoading) return <p> Produkter kommer frem</p>;
if (error) return <p>Der kom fejl i forbindelse med at hente produkter</p>;
if (!product) return<p> Der kom ingen produkter.</p>;

return (
    <main className={style.productdetailpage}>
        <section className={style.product}>
            
                <img
                className={style.image}
                src={product.image}
                alt={product.title}
                />
        
            <div>
                <h1>{product.name}</h1>
                <p className={style.price}>{product.price} kr.</p>
                <p>{product.description}</p>
            </div>
        </section>

        <section className={style.comments}>
            <h2>Kontakt sælger</h2>

            {isLoggedIn ? (
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                    value={dataText}
                    onChange={(event) => setDataText(event.target.value)}
                    placeholder="Skriv en besked til sælger"
                    />
                    <button type="submit">send</button>
                    </form>
            ) : (
                <p>Hej. Ja det kan du sagtens. Jeg har tid imorgen? Hvordan passer kl. 15:00 dig? </p>
            )}

            
                {dataComments.map((comment) => {
                    const date = new Date(comment.createdAt);

                    return (
                        <article
                        className={`${style.comment} ${
                            handleSellerComment(comment) 
                            ? style.seller
                            : style.otherUser


                        }`}
                        key={comment.id}
                    >

                    


                

                    <div className={style.commentHeader}>
                    <strong>{comment.user?.firstname ||'Bruger'}

                    </strong>
                    <span>{date.toLocaleDateString('da-DK')} kl.{' '}
                           {date.toLocaleTimeString('da-DK', {
                            hour: '2-digit',
                            minute: '2-digit',
                            })}
                        
            


                    </span>
                    </div>


                    <p>{comment.comment}</p>
                    {handleEditComment(comment) && (
                        <button
                        className={style.deleteButton}
                        onClick={() => handleDelete(comment.id)}
                        >
                        Slet kommentar
                        </button>
                    )}
                    </article>
                    );
                })}

              

        </section>
        </main>

);
}



