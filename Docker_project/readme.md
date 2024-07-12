<h2>
This README provides instructions on how to build the Docker image, push it to Docker Hub, set up a Kubernetes cluster, deploy the application, and configure the persistent volume

To build a docker image:
docker build -t snoopybanana-app (building docker image)
docker image ls (check if image was built)
docker run snoopybanana-app

Pushing:
docker login 
docker push snoopybanana/snoopybanana-app

Kubernetes:
minikube start
Create kubernetes deployment file (deployment-dock-depl.yaml)
kubectl apply -f deployment-dock-depl.yaml
kubectl get deployments
kubectl get pods (checking if added correctly)
kubectl apply -f pv.yaml
kubectl apply -f deployment-dock-depl.yaml
minikube service get-services --url
</h2>