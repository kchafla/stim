<template>
    <div id ="sidebar" class="col-3">
        <!-- Sidebar -->
        <section id="fprice" class="block">
            <header class="block-title">
                Filter by Price
            </header>
            <div class="block-content">
                Filter config
            </div>                
        </section>
        <section id="fos" class="block">
            <header class="block-title">
                Filter by OS
            </header>
            <div class="block-content">
                Filter config
            </div>
        </section>
        <section id="flang" class="block">
            <header class="block-title">
                Filter by Language
            </header>
            <div class="block-content">
                Filter config
            </div>
        </section>
    </div>
</template>

<script>
</script>

<style scoped>
#sidebar {
    padding-left: 5px;
}

.block {
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
}
.block .block-title {
    background-color: rgba(255, 255, 255, 0.1);
}
.block .block-title,
.block .block-content {
    padding: 6px;
}
</style>
