FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy and restore project files
COPY CRE.API/*.csproj ./CRE.API/
RUN dotnet restore ./CRE.API/CRE.API.csproj

# Copy the rest of the files
COPY . .
RUN dotnet publish ./CRE.API/CRE.API.csproj -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# Configure environment variables for production
ENV ASPNETCORE_URLS=http://+:$PORT
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "CRE.API.dll"]